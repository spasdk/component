Base visual component implementation
====================================

[![build status](https://img.shields.io/travis/spasdk/component.svg?style=flat-square)](https://travis-ci.org/spasdk/component)
[![npm version](https://img.shields.io/npm/v/spa-component.svg?style=flat-square)](https://www.npmjs.com/package/spa-component)
[![dependencies status](https://img.shields.io/david/spasdk/component.svg?style=flat-square)](https://david-dm.org/spasdk/component)
[![devDependencies status](https://img.shields.io/david/dev/spasdk/component.svg?style=flat-square)](https://david-dm.org/spasdk/component?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/spasdk)


Each component is an instance of [Emitter](https://github.com/cjssdk/emitter) module.


## Installation ##

```bash
npm install spa-component
```


## Usage ##

Add the singleton to the scope:

```js
var component = require('spa-component');
```

Show the component (hiding is identical):

```js
// sync
component.show(someData);

// async
component.show(someData, function () {
    // ready
});
```


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/spasdk/component/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`spa-component` is released under the [MIT License](license.md).
