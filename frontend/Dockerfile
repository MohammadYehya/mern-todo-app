# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=22.11.0

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /

COPY . .

RUN npm i

RUN npm run build

RUN chmod -R 777 node_modules/.cache

ENV NODE_ENV production

USER node

EXPOSE 3000

CMD npm start
