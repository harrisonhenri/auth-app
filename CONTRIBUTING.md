# CONTRIBUTING

## Patterns

### Folder naming

The folders containing components should be named using Pascal case. The other folders should be named using the kebab case pattern.

### File naming

The files should be named using the kebab case pattern.

### Import/export

It's recommended to used named exports.

### Components

It's recommended:

- To write functional components (using const)
- To isolate side effects in hooks

### Styles

It's recommended to use the BEM pattern.

## Hypothesis

This project was built using [dummy json](https://dummyjson.com/) as a backend following the hypotheses below:

- This api does not have a refreshToken (and it seems the token is not validated), so, [this snippet](https://github.com/harrisonhenri/auth-app/blob/master/src/services/http/axios.ts#L39) tries to simulate that
- It seems that this api does not return the users data based on the token, so, the app gets the user's data with a get http request using the id as route parameter [as shown here](https://github.com/harrisonhenri/auth-app/blob/master/src/features/slices/user-info/user-info.api.ts#L8). Ideally, this query wouldn't be necessary (the api could already return the entire user's profile on sign in) or done only using the user's session (without the id)
- The dev environment initializes with some mocked data [as shown here](https://github.com/harrisonhenri/auth-app/blob/master/src/features/slices/contacts-list/contacts-list.slice.ts#L11).

### Git patterns

For more information about the commit message pattern, please visit the [Conventional Commits web site](https://www.conventionalcommits.org/en/v1.0.0/)

## 📚 Project Organization

```
├── src
│   ├── __tests__                   <- Directory that contains the test suite
│   ├── components                  <- Directory that contains some global components (components shared along the project)
│   ├── config                      <- Directory that contains some configurations usually based on env vars
│   ├── features                    <- Shared modules
│   │   ├── app
│   │       ├── utils               <- It contains some local utils
│   │       ├── components          <- It contains some local components
│   │   ├── slices                  <- Directory containing the slices of feature (following Redux Rtk pattern)
│   ├── hooks                       <- Shared hooks
│   ├── model                       <- Directory that contains the domain of the app
│   ├── routes                      <- Directory that contains the routes of the app
│   │   ├── private-route.tsx       <- Private router wrapper
│   │   ├── routes.model.ts         <- Place dedicated to register the routes of the app
│   │   ├── routes.tsx              <- Componente that contains the routes of the app
│   ├── services                    <- Directory that contains some services of the app (axios, fetch, etc.)
│   ├── store                       <- Directory that contains the redux store
│   ├── styles                      <- Directory that contains some style definitions
│   ├── utils                       <- Directory that contains some helpers of the app


```
