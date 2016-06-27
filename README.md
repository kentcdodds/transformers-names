# transformers-names
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

Get a random character name from the Transformers franchise

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npm-stat]
[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]
[![Roadmap][roadmap-badge]][roadmap]

## The problem

You want to get a random Transformers name. Maybe you want to add spice to your test data, or your marketing site. This
is the package for you!

## This solution

This has [a json file][json file] with a bunch of names of the characters from transformers and exposes an API to get
these

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and should
be installed as one of your project's `dependencies`:

```
npm install --save transformers-names
```

## Usage

Get the `random` function:

```javascript
import getTransformer from 'transformers-names'
// or, if you're using CommonJS
const getTransformer = require('transformers-names')
// or, if you're using globals from the UMD build
const getTransformer = window.transformersNames
```

Call the `random` function:

```javascript
getTransformer() // Ironhide
getTransformer(3) // ["Wheeljack", "Sandstorm", "Ratchet"]
```

Also, the `all` export is an array of all the names. You can get this via `getTransformer.all`

## Inspiration

See [these](https://www.npmjs.com/search?q=-names). My original inspiration was [@sindresorhus][sindresorhus]

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](https://kentcdodds.com)<br />[💻](https://github.com/kentcdodds/transformers-names/commits?author=kentcdodds) [📖](https://github.com/kentcdodds/transformers-names/commits?author=kentcdodds) 🚇 [⚠️](https://github.com/kentcdodds/transformers-names/commits?author=kentcdodds) |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification. Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/kentcdodds/transformers-names.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/transformers-names
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/transformers-names.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/transformers-names
[version-badge]: https://img.shields.io/npm/v/transformers-names.svg?style=flat-square
[package]: https://www.npmjs.com/package/transformers-names
[downloads-badge]: https://img.shields.io/npm/dm/transformers-names.svg?style=flat-square
[npm-stat]: http://npm-stat.com/charts.html?package=transformers-names&from=2016-04-01
[license-badge]: https://img.shields.io/npm/l/transformers-names.svg?style=flat-square
[license]: https://github.com/kentcdodds/transformers-names/blob/master/other/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/transformers-names/blob/master/other/CODE_OF_CONDUCT.md
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap]: https://github.com/kentcdodds/transformers-names/blob/master/other/ROADMAP.md
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[json file]: https://github.com/kentcdodds/starwars-names/blob/master/src/transformers-names.json
[sindresorhus]: https://github.com/sindresorhus
