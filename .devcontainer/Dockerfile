# Use the [Choice] comment to indicate option arguments that should appear in VS Code UX. Use a comma separated list.
#
# [Choice] Debian OS version: bullseye, buster
ARG VARIANT="bullseye"
FROM buildpack-deps:${VARIANT}-curl

# Use the [Option] comment to specify true/false arguments that should appear in VS Code UX
#
# [Option] Install zsh
ARG INSTALL_ZSH="true"
# [Option] Upgrade OS packages to their latest versions
ARG UPGRADE_PACKAGES="false"
# Install needed packages and setup non-root user. Use a separate RUN statement to add your own dependencies.
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive