# Multi Framework(version) Micro Frontends with Module Federation and Web Components

## Structure
The projects has an Angular Shell that load using webpack 5 and module federation varius other microfrontend (Angular, React, VueJs)

 - Shell
 - Mfe1
 - Mfe2
 - Mfe3
 - Mfe4
 - Mfe5

## Prerequisites

- yarn installed


## Start and Run

1. ``yarn`` -- Install dependencies
2. ``yarn bootstrap`` -- Install dependencies of all micro frontends and shell with lerna
3. ``yarn start`` -- Starts the shell and all Micro Frontends with lerna
4. Navigate to [http://localhost:4200](http://localhost:4200) to start the shell

## Link

* [http://localhost:4200](http://localhost:4200) -> shell [Angular 13.1.1]
* [http://localhost:4201](http://localhost:4201) -> mfe1 [Angular 13.1.1]
* [http://localhost:4202](http://localhost:4202) -> mfe2 [Angular 12.2.15]
* [http://localhost:4203](http://localhost:4203) -> mfe3 [Angular 12.2.15]
* [http://localhost:4204](http://localhost:4204) -> mfe4 [React 17.0.1]
* [http://localhost:4205](http://localhost:4205) -> mfe5 [VueJs 3.0.11]

