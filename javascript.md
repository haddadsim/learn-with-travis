| [Home](README.md) | [Groundwork](groundwork.md) | JavaScript | [React](react.md) | [Serverless](serverless.md) | [PHP](php.md) | [WordPress](wordpress.md) |
|-------------------|-----------------------------|------------|-------------------|-----------------------------|---------------|---------------------------|

# JavaScript

## Package Management

* [ ] [How to NPM](https://github.com/workshopper/how-to-npm)
  * [ ] Extra Credit Repo [https://github.com/username/put-extra-credit-repo-name-here](https://github.com/username/put-extra-credit-repo-name-here)
* [ ] [Intro to Yarn Package Manager - Chris Courses](https://www.youtube.com/watch?v=7n467QmiANM)

## Node, etc

[![Build Status](https://img.shields.io/circleci/token/YOUR_TOKEN/project/github/USER/REPO/BRANCH.svg?style=flat-square)](https://circleci.com/USER/REPO/tree/BRANCH) [![Coverage Status](https://img.shields.io/codecov/c/token/YOUR_TOKEN/github/USER/REPO/BRANCH.svg?style=flat-square)](https://codecov.io/USER/REPO/branch/BRANCH)

* [ ] [Learn You Node](https://github.com/workshopper/learnyounode)
* [ ] [Expressworks](https://github.com/azat-co/expressworks)
* [ ] [Promise It Won't Hurt](https://github.com/stevekane/promise-it-wont-hurt)
  * _Note_ Exercises 9 and 10 have bugs in the workshopper that will cause your solution to always fail as documented [here](https://github.com/stevekane/promise-it-wont-hurt/pull/112). Complete and leave it failed or skip it altogether.
* [ ] [Step-by-step tutorial to build a modern JavaScript stack](https://github.com/verekia/js-stack-from-scratch)

  * [Part 08](https://github.com/verekia/js-stack-from-scratch/blob/master/tutorial/08-bootstrap-jss.md)
    * There is a reported [issue](https://github.com/verekia/js-stack-from-scratch/issues/243) while using the latest `react-jss` version and it is solved by importing JssProvider rather than SheetsRegistryProvider.

  * [Part 09](https://github.com/verekia/js-stack-from-scratch/blob/master/tutorial/09-travis-coveralls-heroku.md)
    * Create a separate repository, it makes it easier to set up CI and to Deploy your app.
    * Read through [this gist](https://gist.github.com/Faultless/cbb014364dc1a5440ab6473a9a3608ab) for **major** changes to the CI stack.
    * **Before** trying to **deploy** to Heroku, **Remove** the `--progress` flag from your `prod:build` script.

  * Badges
    * **Once done**, update the badges placeholders above with ones specific for your application.
    * You can get the badges by visiting [shields.io](http://shields.io/). You can get Tokens from CircleCI's and Codecov's respective websites.

### More Reading

* [Mastering Modular JavaScript](https://github.com/mjavascript/mastering-modular-javascript)
  * This book is part of a series from the creator of [PonyFoo.com](https://ponyfoo.com/books). It explores the history of modules in JavaScript and how to build robust modules using real-world design patterns and practices. The book is open source and free, and can be read on GitHub or through [PonyFoo.com](https://ponyfoo.com/books) in exchange for a tweet.
