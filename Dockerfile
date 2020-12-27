FROM node:14 AS base

ARG USER_NAME=dockeruser
ARG UID=1000
ARG GID=1000
RUN groupadd -g $GID $USER_NAME; useradd -l -r -m -u $UID -g $GID $USER_NAME
ENV USER $USER_NAME

CMD ["tail", "-f", "/dev/null"]
