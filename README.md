# artemis-core

## For Developers

### DEV Machine Prerequisites
Git - can be installed from [git site](https://git-scm.com/downloads).

Node.js - can be installed from [Nodejs.org](https://nodejs.org).

Gulp - can be installed by running `npm i -g gulp`
    
### Cloning the Repository
This will clone the repository to your local machine
```sh
git clone https://github.com/LeerixLabs/artemis-core.git
npm install
``` 

### Launching the Dev Server
This will launch the dev server with a dummy site on http://localhost:8080/

You can change the default port on the gulpfile.js
```sh
gulp serve
```

### Building the Library Files
This will build `artemis.core.js`, `artemis.core.js.map`, and `artemis.core.min.js` into the local `dist` directory
```sh
gulp pack
```

### Running Tests
This will run the tests
```sh
gulp test
```

### Publishing to npm
This will publish `artemis.core.min.js` to the npm registry

First, update the new version number on package.json
```sh
gulp
npm login
npm publish
```
