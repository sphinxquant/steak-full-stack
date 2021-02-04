FROM node:14.15.2 AS base

ARG USER_NAME=dockeruser
ARG UID=1000
ARG GID=1000
RUN groupadd -g $GID $USER_NAME; useradd -l -r -m -u $UID -g $GID $USER_NAME
ENV USER $USER_NAME


RUN npm install -g yarn
RUN npm install -g lerna

CMD ["tail", "-f", "/dev/null"]
