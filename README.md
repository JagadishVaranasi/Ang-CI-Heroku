# Angular + Node + Express + CircleCI + Heroku - Starter Project

[![CircleCI](https://circleci.com/gh/vbalas/angular2-quickstart-tdd-circleci.svg?style=svg)](https://circleci.com/gh/vbalas/angular2-quickstart-tdd-circleci)

![Heroku](https://heroku-badge.herokuapp.com/?app=angular2-tdd-circleci-heroku-i)

**This is Work in progress**

This starter project is built from [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html)

It's been extended with testing support so you can start writing tests immediately.

**This is not the perfect arrangement for your application. It is not designed for production.

This project integrates Angular 2 with Express. 

It includes 

* circle.yml file to run tests

* Procfile for Heroku deployment



We have connected this GitHub with CircleCI and heroku 

## Getting started - Step 1 : Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/angular/quickstart  my-proj
cd my-proj
```

### Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```


The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run build` - runs the TypeScript compiler once.
* `npm run build:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)
* `npm run test:once` - compiles and run the karma unit tests just once
* `node server` - Runs as a Node server
* `npm run watch` - Runs the node server and watches for any changes made, recompiles and restarts. Quite handy for development

### Testing

The QuickStart documentation doesn't discuss testing.
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

#### Unit Tests
TypeScript unit-tests are usually in the `src/app` folder. Their filenames must end in `.spec.ts`.

Look for the example `src/app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

#### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `src` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured Protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the `lite-server` at `localhost:8080`
and launches Protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.


## Integration instructions

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```shell
git remote add origin <repo-address>
git push -u origin master
```

Follow and configure to build the newly created repository in CircleCI. 

Any commit in github will trigger a test in CircleCI. Later we can issue only for pull request or triggers. Good for now.

Now for deployment, login to your heroku account. Create a new application of Node type.

Configure heroku to pull code from GitHub repo : `https://github.com/<my-org>/my-proj.git`

### Enable automatic deployment

Under automatic enable the option [X] Wait for CI to pass before deploy 

Enable Automatic Deploys 

For more information about CircleCI and heroku integration refer to this [link] (https://circleci.com/docs/1.0/continuous-deployment-with-heroku/)



