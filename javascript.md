| [Home](README.md) | JavaScript & React | [Serverless](serverless.md) | [WordPress & PHP](wordpress.md) | [GraphQL](graphql.md) | [Linux & Docker](linux.md) | [CSS](css.md) |
| ----------------- | ------------------ | --------------------------- | ------------------------------- | --------------------- | -------------------------- | ------------- |


# JavaScript

## Package Management

* [X] [How to NPM](https://github.com/workshopper/how-to-npm)
  * [ ] Extra Credit Repo [https://github.com/username/put-extra-credit-repo-name-here](https://github.com/username/put-extra-credit-repo-name-here)
* [ ] [Intro to Yarn Package Manager - Chris Courses](https://www.youtube.com/watch?v=7n467QmiANM)

## Fundamentals

It can be overwhelming finding the right resources for learning modern JavaScript development. While much of [The Modern Stack](#the-modern-stack) focuses on JavaScript tooling and frameworks, here are a few resources for learning _JavaScript, the language_. This section will help you master features like Classes, Promises, and flow control.

* [Practical Modern JavaScript](https://github.com/mjavascript/practical-modern-javascript)
  * This book is part of a series from the creator of [PonyFoo.com](https://ponyfoo.com/books). It establishes what modern JavaScript development looks like with ES6+. It's very detailed and a great resource for learning everything from rest parameters to Promises. The book is open source and free, and can be read on GitHub or through [PonyFoo.com](https://ponyfoo.com/books) in exchange for a tweet.
* [ ] [Promise It Won't Hurt](https://github.com/stevekane/promise-it-wont-hurt)

## The Modern Stack

[![Build Status](https://img.shields.io/circleci/token/YOUR_TOKEN/project/github/USER/REPO/BRANCH.svg?style=flat-square)](https://circleci.com/USER/REPO/tree/BRANCH) [![Coverage Status](https://img.shields.io/codecov/c/token/YOUR_TOKEN/github/USER/REPO/BRANCH.svg?style=flat-square)](https://codecov.io/USER/REPO/branch/BRANCH)

* [ ] [Learn You Node](https://github.com/workshopper/learnyounode)
* [ ] [Expressworks](https://github.com/azat-co/expressworks)
* [ ] [Webpack from First Principles](https://www.youtube.com/watch?v=WQue1AN93YU)
* [ ] [Step-by-step tutorial to build a modern JavaScript stack](https://github.com/verekia/js-stack-from-scratch)

  * Each exercise should be in its own folder
    * You may find it useful to copy/paste the content of the previous exercise for the next one
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
  * This is another book from the creator of [PonyFoo.com](https://ponyfoo.com/books). It explores the history of modules in JavaScript and how to build robust modules using real-world design patterns and practices. Once you've mastered the [Fundamentals](#fundamentals), this book can introduce even more interesting and advanced topics.

# [React](https://facebook.github.io/react/)

* [ ] [Intro To React](https://facebook.github.io/react/tutorial/tutorial.html)
* [ ] [Simple React Patterns](http://lucasmreis.github.io/blog/simple-react-patterns/)
* [ ] [React Express](http://www.react.express/)
* [ ] [Create React App](https://github.com/facebookincubator/create-react-app)
* [ ] [Testing with Jest](https://facebook.github.io/jest/docs/tutorial-react.html)
* [ ] [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
* [ ] [React Redux Tutorial for Beginners, learning Redux in 2018](https://dev.to/valentinogagliardi/react-redux-tutorial-for-beginners-learning-redux-in-2018-13hj)

## React Best Practices

* [ ] [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* [ ] [MuseFind's](https://musefind.com/) [Best Practices for Writing React Components](https://engineering.musefind.com/our-best-practices-for-writing-react-components-dec3eb5c3fc8)
* [ ] [Clean Code vs. Dirty Code by American Express Technology](https://americanexpress.io/clean-code-dirty-code/)
* [ ] [React Architecture Best Practices](https://www.sitepoint.com/react-architecture-best-practices/)