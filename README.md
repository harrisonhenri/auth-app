# Auth App

[![E2E Tests](https://github.com/harrisonhenri/auth-app/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/harrisonhenri/auth-app/actions/workflows/main.yml/badge.svg?branch=master)

Welcome to the Auth App!!

## Local installation and configuration

To install and run the project locally, first, add a .env file (based on the .env.example)!

1. Install the node (minimum version of the package.json at least) from [node site](https://nodejs.org/en/download/).

2. Install the dependencies with

```=sh
yarn install --frozen-lockfile
```

3. And run with

```=sh
yarn start
```

4. And, finally, you can use one the [dummy users](https://dummyjson.com/users) to access the system:

````=sh
username kminchelle
password 0lelplR
```x

## Testing

To run the tests just type

```=sh
yarn test
````

## E2E

To run the e2e tests just type (this tests run in github actions)

```=sh
yarn cypress:run
```

## Build

To build:

```=sh
yarn build
```

## Useful (or mandatory :)) VsCode extensions

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Build with

<div>
<img align="left" alt="ReactJs" width="68px" style="margin-left:1em" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img align="left" alt="Typescript" width="68px" style="margin-left:1em" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" />
<img align="left" alt="Redux" width="68px" style="margin-left:1em" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
<img align="left" alt="Vite" width="68px" style="margin-left:1em" src="./public/vite.svg" />
<img align="left" alt="Sass" width="68px" style="margin-left:1em" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />
<br /><br /><br /><br />
</div>

## Contributing

To contribute, please read our [CONTRIBUTING.md](./CONTRIBUTING.md)
