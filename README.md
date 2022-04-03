# DifxV2

This project was generated using [Nx](https://nx.dev).

## Folder structure

difx_exchange_rewamp
apps
shell <-- (1)The main application
pages
\_app.tsx <-- Main container
\_document.tsx <-- Over here, you can import external script/stylesheet/font
index.tsx <-- Main component
shell-e2e <-- Contain code for end to end testing
libs
core-ui <-- (2) Contain common components, will be using on (1)
src
lib
shared <-- Contain api calling (api), state management (hook) ; can be reused from (2) and (1)
api
hook
type

## Install

yarn

## Start project

yarn start

## Build

yarn build

## Storybook

yarn storybook

## Running unit tests

yarn test

## Running end-to-end test

yarn test:e2e
