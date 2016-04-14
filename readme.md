Base visual component implementation
====================================

[![NPM version](https://img.shields.io/npm/v/spa-component.svg?style=flat-square)](https://www.npmjs.com/package/spa-component)
[![Dependencies Status](https://img.shields.io/david/spasdk/component.svg?style=flat-square)](https://david-dm.org/spasdk/component)
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


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problem or suggestion please open an issue [here](https://github.com/spasdk/component/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License ##

`spa-component` is released under the [MIT License](license.md).
