## Core JavaScrip libraries used to build

* ReactJS: a JavaScript library for building user interface, focus on the "View" layer of an MV* application.
* Redux: a predictable state container for JavaScript apps, inspired by Functional programming
* Create-React-App: bootstrap library written by Facebook, helps to speed up creating a complete React JS app from scratch 
* React-Router: routing library helps in managing URL routing of a Single Page Application
* Redux-Thunk: Redux middleware helps in communicating with backend web service
* Redux-Observable: another Redux middleware helps in communicating with backend webservice which leverages Reactive programming 
* Redux-Persist: library helps in persisting and rehydrating Redux's store
* Redux-Log: Redux middleware to provide a beautiful log of the Redux's application state
* Redux-Form: library helps in managing form state in Redux
* RxJS: library for Reactive programming in JavaScrip
* LocalForage: fast and simple storage library for JavaScript
* Jest: library help in writing unit test
* Enzyme: help in unit testing React components in isolation
* Nock: an HTTP mocking and expectations library for Node.js,  used to perform HTTP requests in isolation
* Bootstrap: CSS library help in creating Responsive web
* React-Bootstrap: wrapper to create Bootstrap 3 components built with React

## Build

*Prequisite*: Node JS latest version

To install all dependencies

```
$ npm install
```

To start the development server

```
$ npm start
```

To start the development server and point to a specific environment (for those who's using Unix*)

```
$ REACT_APP_SVC_BASE_URL=http://localhost:8181 npm start
```

To start the development server and point to specific environment (for those who's using Windows)

```
$ set REACT_APP_SVC_BASE_URL=http://localhost:8181&&npm start
```

To start the test runner

```
$ npm test
```

To build the website in release mode
```
$ npm run build
```

## Deploy

TBD

## Troubleshooting

TBD