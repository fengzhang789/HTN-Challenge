# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

ARG NODE_VERSION=20.10.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Copy the rest of the source files into the image.
COPY . .
# Run the build script.
RUN npm install

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base as final

# Use production node environment by default.
ENV NODE_ENV production

USER root

# Copy package.json so that package manager commands can be used.
COPY package.json .


# Expose the port that the application listens on.
EXPOSE 5173

# Run the application.
CMD npm run dev
