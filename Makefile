#=============================================================================
# Makefile for testing and running the steakcoin
#
#=============================================================================
CMD ?= /bin/bash
CONTAINER_NAME ?= steakcoin-dev

export UID ?= ${shell id -u}
export GID ?= ${shell id -g}

ifdef OS
  TTY_PREFIX = winpty
endif


# Disable verbosity
MAKEFLAGS += --silent

# Set default target
.DEFAULT_GOAL := all


# Get paths to programs
NODE := $(shell which node)
YARN := $(shell which yarn)
LERNA := $(shell which lerna)
DOCKER_COMPOSE := $(shell which docker-compose)

ESLINT := node_modules/.bin/eslint
NYC := node_modules/.bin/nyc
LAB := node_modules/.bin/lab
PRETTIER := node_modules/.bin/prettier
NODEMON := node_modules/.bin/nodemon

NODE_ARGS := --max-old-space-size=100000 --trace-deprecation

DOCKER_COMPOSE_VERSION := 1.26.2


#=============================================================================
# Bundled rules

all: install start test stop
.PHONY: all



#=============================================================================
# Installation/setup rules



build: $(DOCKER_COMPOSE)
	${TTY_PREFIX} $(DOCKER_COMPOSE) build
.PHONY: build

up: $(DOCKER_COMPOSE)
	${TTY_PREFIX} $(DOCKER_COMPOSE) up --detach \
		--no-color \
		--quiet-pull \
		--remove-orphans \
		steakcoin-dev
.PHONY: up

iup: $(DOCKER_COMPOSE)
	${TTY_PREFIX} $(DOCKER_COMPOSE) up \
		--no-color \
		--quiet-pull \
		--remove-orphans \
		steakcoin-dev
.PHONY: iup

down: $(DOCKER_COMPOSE)
	${TTY_PREFIX} $(DOCKER_COMPOSE) down \
		--remove-orphans \
		--volumes \
		--rmi local
.PHONY: down

stop: $(DOCKER_COMPOSE)
	${TTY_PREFIX} $(DOCKER_COMPOSE) stop \
		--remove-orphans \
		--volumes \
		--rmi local
.PHONY: stop

shell: ${DOCKER_COMPOSE}
	${TTY_PREFIX} ${DOCKER_COMPOSE} exec -u ${UID} ${CONTAINER_NAME} ${CMD}
.PHONY: shell


build_client: install
	$(YARN) --cwd ./client build
.PHONY: build_client

#=============================================================================

install:
	# $(YARN) install --frozen-lockfile --silent --no-progress --non-interactive --check-files
	$(LERNA) bootstrap 
	$(YARN) --cwd ./server install --frozen-lockfile --silent --no-progress --non-interactive --check-files
	# $(YARN) --cwd ./client install --frozen-lockfile --silent --no-progress --non-interactive --check-files
.PHONY: install

post_install:
	@mkdir -p logs
.PHONY: post_install

start: install
	${LERNA} exec --parallel -- yarn watch &
	${NODEMON} --watch server index.ts
.PHONY: start

start_server:
	${NODEMON} --watch server index.ts
.PHONY: start

start_client:
	${LERNA} exec --scope @internal/client -- yarn start
.PHONY: start_client


clean:
	${LERNA} clean -y
	$(YARN) cache clean --no-progress --silent
.PHONY: clean

#=============================================================================
# Integration and unit test rules

$(ESLINT) $(NYC) $(LAB) $(PRETTIER):
	$(MAKE) install

test: $(ESLINT) $(NYC) $(LAB) lint build_ui test_unit test_ui
.PHONY: test

lint: $(ESLINT)
	$(ESLINT) --quiet .
.PHONY: lint

lint_fix: $(ESLINT)
	$(ESLINT) --quiet --fix .
.PHONY: lint_fix

# Unit tests
test_unit: $(NYC) $(LAB)
	TZ=UTC NODE_ENV=test $(NODE) $(NODE_ARGS) $(NYC) $(LAB) $(shell find . -type f -not -path '*node_modules*' -name '*_test.js' | sort)
.PHONY: test_unit

# UI Unit Tests
test_client:
	$(YARN) --cwd ./client lint
	$(YARN) --cwd ./client test --no-watch --coverage
.PHONY: test_client

pretty: $(PRETTIER)
	$(PRETTIER) --config ./.prettierrc.js --write \
		'./server/**/**/*.js' \
		'./scripts/*.js' \
		./index.js
.PHONY: $(PRETTIER)
