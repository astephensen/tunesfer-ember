<h1><img width="28" height="28" src="public/logo.png?raw=true" alt="Tunesfer App Icon">&nbsp;Tunesfer</h1>

![](https://img.shields.io/badge/Ember-3.16-orange) ![](https://github.com/astephensen/tunesfer/workflows/Build/badge.svg)

Transfer Spotify playlists to Apple Music!

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone git@github.com:astephensen/tunesfer.git`
* `cd tunesfer`
* `npm install`
* You need to set the `AM_DEVELOPER_TOKEN` environment variable to your Apple Music developer token. This can also be specified in the `.env` file in the root of the project.

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

(For when there are some...)

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
