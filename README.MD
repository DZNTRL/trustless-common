# Pro Web
*A content-tag-tagSet management solution that employs a novel authentication workflow based on a gpg-based challenge scheme.*
## Contents
Project [About](./docs/meta.md)
* [Setup](#setup)
* [Using It](#using-it)
* [Repositories & Compositions](#repo-comp)

## <a id="setup">Setup</a>
1. Select/Create a folder to contain all the repositories.
2. Install `yarn` globally.
`npm install yarn -g`
3. Install/setup [verdaccio](https://verdacio.org), if its not already. If the url varies from http://localhost:4873 setup you'll need to change the that in all the build scripts for each repo.
`npm install verdaccio -g`
`verdaccio` or `pm2 verdaccio` if you have [pm2](https://pm2.keymetrics.io/) installed.
4. Install `npm-version` to automatically bump the version when a build is deployed to verdaccio.
5. Run the [install script](./sh/repo-install.sh), or alternately install all the dependencies for each project and build them in the correct order in terms of dependency, see [repositories](#repo-comp) section to undertand the dependency web. *Please note that the execution context (usually a terminal) needs to define `rm -rf ./dist/js` as "remove the contents of the folder at the given relative path.* 
6. Setup [database from model](./docs/sql-setup.md)

## <a id="using-it">Using it</a>
Any time a dependent repository is changed the build scripts will need to be triggered. Soon, there will be a command from the dependant projects to build their dependencies when a build command for the dependant is issued.
Theoretically, one could replace any of the modules, core/api/statemanager as long as the fulfill the realated contract/s properly. Indeed, the tests can easily be applied to any repository implementing the proper contract/s.

## <a id="repo-comp">Repositories & Composition</a>
#### [Pro-Web-Common](https://github.com/jbotw-proweb/pro-web-common)
**Overview**
Common does not have a main export as there's no good way to group interfaces together in Typescript that I know of; in other words there's no way to create an interface of interfaces. Please let me know if I'm wrong, and of course, this is subject to change.

#### [Pro Web Core](https://github.com/jbotw-proweb/pro-web-core)
Core contains 2 discrete codes: 
  1) the [mysql workbench](https://www.mysql.com/products/workbench/) data model. Please see the partial ["guide"](./docs/sql-setup.md) for setting up an instance.
  2) the models, repo/data & service layers. It's reasonable to conclude that business classes/models should be in [common](https://github.com/jbotw-proweb/pro-web-common). Nevertheless, they are here for now.

#### [Pro Web Core Tests](https://github.com/jbotw-proweb/pro-web-core-tests)
##### Depends On
  Pro-Web-Core
#### [Pro Web App](https://github.com/jbotw-proweb/pro-web-app)
##### Depends On
    Pro-Web-Common Pro-Web-Core Pro-Web-App-Cli-Api-Service Pro-Web-App-Cli-State-Manager

#### [Pro Web App Tests](https://github.com/jbotw-proweb/pro-web-app-tests)
##### Depends On
    Pro-Web-App

#### [Pro Web App Cli Api Service](https://github.com/jbotw-proweb/pro-web-app-cli-api-service)
##### Depends On
    Pro-Web-Common

#### [Pro Web App Cli Api Service Tests]() coming soon-ish
##### Depends On
    Pro-Web-App-Cli-Api-Service

#### [Pro Web App Cli State Manager](https://github.com/jbotw-proweb/pro-web-app-cli-state-manager)
##### Depends On
    Pro-Web-Common Pro-Web-App-Cli-Api-Service

#### [Pro Web App Cli State Manager Tests](https://github.com/jbotw-proweb/pro-web-app-cli-state-manager-tests)
##### Depends On
    Pro-Web-Common Pro-Web-App-Cli-State-Manager
