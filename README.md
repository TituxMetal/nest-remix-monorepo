# Turbo Monorepo

This project is Turbo Monorepo. It uses the latest version of Turbo to create a monorepo with
multiple packages. The main application is a NestJS backend that serves a Remix frontend.

## Usage

To get started, clone the repository and run the following commands:

```bash
yarn install
yarn build
yarn dev
```

## Backend

The backend is a NestJS application. The main module starts a dev server on port 3000 that serves
the Remix frontend.

## Frontend

The frontend is a Remix application. It is served by the NestJS backend. It uses Tailwind CSS for
styling.

## Issues

This porject works great as is, but there are some issues that need to be resolved:

- [ ] Eslint is not working properly
- [ ] The tsconfig is not clear
- [ ] When using the standard Turbo setup, the Remix frontend does not work properly:
  - [ ] The Remix frontend is compiled correctly, but the Tailwind CSS is not applied:
    - [ ] The Tailwind configuration is correct?
  - [ ] The Remix frontend is not served correctly by the NestJS backend
- [ ] The Turbo file structure is not standard

## Goals

The goal of this project is to demonstrate, step by step, how to reproduce this setup without any of
the above issues.

## Steps

- [x] Remove all Eslint related files and packages from the project
