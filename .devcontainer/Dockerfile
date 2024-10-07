FROM mcr.microsoft.com/devcontainers/javascript-node:1-18

# Install playwright
RUN npm install -g @playwright/test

# Install latest pnpm
RUN npm install -g pnpm

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && curl -sSL https://dl.google.com/linux/direct/google-chrome-stable_current_$(dpkg --print-architecture).deb -o /tmp/chrome.deb \
    && apt-get -y install /tmp/chrome.deb sudo \
    && rm -rf /var/lib/apt/lists/*

# Ensure the `node` user has access to `sudo`
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

USER $USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

EXPOSE 4321