# app-config-chain [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]


## Information

<table>
<tr>
<td>Package</td>
<td>app-config-chain</td>
</tr>
<tr>
<td>Description</td>
<td>Cascading configuration for web applications</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

## Install

```
npm install app-config-chain --save
```

## Example

Loads configuration files from a `config` folder in your project root.

- `default` is always loaded if it exists
- If you specify `NODE_ENV=production` then both `production` and `default` are loaded, with `production` taking precedence.
- Any valid JS extension can be used for config - JS, json, etc.
  - To load another extension, register it before you require this module

```js
var config = require('app-config-chain');
```

## LICENSE

(MIT License)

Copyright (c) 2015 Contra <yo@contra.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[gittip-url]: https://www.gittip.com/contra/
[gittip-image]: http://img.shields.io/gittip/contra.svg

[downloads-image]: http://img.shields.io/npm/dm/app-config-chain.svg
[npm-url]: https://npmjs.org/package/app-config-chain
[npm-image]: http://img.shields.io/npm/v/app-config-chain.svg

[travis-url]: https://travis-ci.org/contra/app-config-chain
[travis-image]: https://travis-ci.org/contra/app-config-chain.png?branch=master

[coveralls-url]: https://coveralls.io/r/contra/app-config-chain
[coveralls-image]: https://coveralls.io/repos/contra/app-config-chain/badge.png

[depstat-url]: https://david-dm.org/contra/app-config-chain
[depstat-image]: https://david-dm.org/contra/app-config-chain.png

[david-url]: https://david-dm.org/contra/app-config-chain
[david-image]: https://david-dm.org/contra/app-config-chain.png?theme=shields.io
