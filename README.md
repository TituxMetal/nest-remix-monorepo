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
- ~~[ ] The tsconfig is not clear~~
- [ ] When using the standard Turbo setup, ~~the Remix frontend does not work properly:~~
  - ~~[ ] The Remix frontend is compiled correctly, but the Tailwind CSS is not applied:~~
    - ~~[ ] The Tailwind configuration is correct?~~
  - ~~[ ] The Remix frontend is not served correctly by the NestJS backend~~
- [ ] The Turbo file structure is not standard

## Goals

The goal of this project is to demonstrate, step by step, how to reproduce this setup without any of
the above issues.

## Steps

- [x] Remove all Eslint related files and packages from the project
- [x] Change the tsconfig in the package to a standard base configuration that works in all apps
- [x] Adjust the tsconfig in the backend to extends the base and add the necessary configurations
      for NestJS
- [x] Adjust the tsconfig in the frontend to extends the base and add the necessary configurations
      for Remix
- [x] Remove all unnecessary scripts from the package.json in backend
- [x] Remove all unnecessary scripts from the package.json in frontend
- [x] Add the standard base scripts, build, dev, and start, that works for NestJS in the backend
      package.json file
- [x] Add the standard base scripts, build, dev, and start, that works for Remix in the frontend
      package.json file
- [x] Add the necessary scripts to the root package.json file to build, dev, and start the full app
- [x] Add the tailwind config path to postcss.config.cjs, like this:
      `config: path.resolve(__dirname, 'tailwind.config.ts')`
- [x] Update the tailwind config content key with:
      `content: [path.join(__dirname, './app/**/*.{ts,tsx}')]`
  - [x] Change tailwind.config.cjs to tailwind.config.ts if it works
- Add Eslint to the project:
  - [x] First in the backend
  - [ ] Then in the frontend
- [ ] Add Prettier to the project
- [ ] Move the backend and frontend to an apps folder
