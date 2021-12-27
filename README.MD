# Pro Web
*A content-tag-tagSet management solution that employs a novel authentication workflow based on a gpg-based challenge scheme.*

## Contents
Project [About](./docs/meta.md)
* [Setup](#setup)
* [Using It](#using-it)
* [Repositories & Compositions](#repo-comp)

## <a id="setup">Setup</a>
1. Select/Create a folder to contain all the repositories.
2. Install globally:
    [yarn]() `npm install yarn -g`
    [verdaccio](https://verdaccio.org) `npm install verdaccio -g`
        Used as a package management proxy so we can publish new versions of the modules for local use.
        The default url for verdaccio is http://localhost:4873. If it is set differently then change the build scripts for each repo in their respective `package.json`
        Running verdaccio is a lot simpler with [pm2](https://pm2.keymetrics.io/) or some other process manager.
    [npm-version]() `npm install npm-version -g`
        *auto-bumps the minor version when `yarn publisha` or `yarn bp` is run.*
    
3. Run the [install script](./sh/repo-install.sh), or alternately install all the dependencies for each project and build them in the correct order in terms of dependency, see [repositories](#repo-comp) section to undertand the dependency web. *Please note that the execution context (usually a terminal) needs to define `rm -rf ./dist/js` as "remove the contents of the folder at the given relative path.* 
4. Setup [database from model](./docs/sql-setup.md)
5. Run endpoint, [core tests](https://github.com/jbotw-proweb/pro-web-core-tests) or [app](https://github.com/jbotw-proweb/pro-web-app).

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
#### [Pro Web App Cli Components](https://github.com/jbotw-proweb/pro-web-app-cli-components)
##### Depends On
    Pro-Web-Common Pro-Web-App-Cli-State-Manager Pro-Web-App-Cli-Api-Service
#### [Pro Web App Cli Components Tests](https://github.com/jbotw-proweb/pro-web-app-cli-state-manager-tests)
##### Depends On
    Pro-Web-Common Pro-Web-App-Cli-State-Manager
