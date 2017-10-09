# postlight / learn

A collection of resources for learning various engineering skills.

**This repository is very incomplete and a continual work-in-progress! Please send pull requests.**

## First, fork it

Fork this repository. Once you've worked/read through the Git section, create a new branch in your fork, and commit the code you write as you go.

## Second, use your Git skills

Once you've completed your Git training you will be ready to start branching, committing and creating pull requests to your own fork. You will only need to do this for the trainings that require you to write code. Other trainings such at git-it and How To NPM you will create separate repos as instructed in the workshop.

* Training Module
  * Create a branch for the training
  * Create a separate folder in the repository to store your code
* Training Exercises
  * Commit each exercise to the branch
  * Consider each exercise as a feature
  * Other commits should follow Postlight's commit style
* Finished?
  * Check off the boxes on the list of the readme
  * When your done push your branch to your fork
  * Create a Pull Request to your own fork (not the original repo)
  * Add your mentor as a reviewer

## Git / GitHub

* [ ] ["Postlight GitHub Talk by Jeremy Mack 2016-04-04"](https://www.youtube.com/watch?v=YtckscmKtYk) ([Slides](https://www.mindmeister.com/678359058?t=zgPweW2tuV))
  * [ ] Read about [Postlight's Commit Style](https://trello.com/c/Z2xpXbm1/10-%F0%9F%8E%A8-commit-style)
  * [ ] Read about [Postlight's Pull Request Style](https://trello.com/c/DsH0Ea4L/11-%F0%9F%8C%B1-pull-request-style)
* [ ] [Git-it Desktop App tutorial](https://github.com/jlord/git-it-electron)
  * [ ] Your first repo: [https://github.com/username/hello-world](https://github.com/username/hello-world)
  * [ ] Your fork of patchwork repo: [https://github.com/username/patchwork](https://github.com/username/patchwork)

## Just Starting Out

_Great for anyone who hasn't done much web development._

* [ ] [FreeCodeCamp](https://www.freecodecamp.org) - Learn the basics of HTML, CSS, and JavaScript online.

## Documentation

* [ ] [How to Markdown](https://github.com/workshopper/how-to-markdown)

## Package Management

* [ ] [How to NPM](https://github.com/workshopper/how-to-npm)
  * [ ] Extra Credit Repo [https://github.com/username/put-extra-credit-repo-name-here](https://github.com/username/put-extra-credit-repo-name-here)
* [ ] [Intro to Yarn Package Manager - Chris Courses](https://www.youtube.com/watch?v=7n467QmiANM)

## JavaScript

[![Build Status](https://img.shields.io/circleci/token/YOUR_TOKEN/project/github/USER/REPO/BRANCH.svg?style=flat-square)](https://circleci.com/USER/REPO/tree/BRANCH) [![Coverage Status](https://img.shields.io/codecov/c/token/YOUR_TOKEN/github/USER/REPO/BRANCH.svg?style=flat-square)](https://codecov.io/USER/REPO/branch/BRANCH)

* [ ] [Learn You Node](https://github.com/workshopper/learnyounode)
* [ ] [Expressworks](https://github.com/azat-co/expressworks)
* [ ] [Promise It Won't Hurt](https://github.com/stevekane/promise-it-wont-hurt)
  * _Note_ Exercises 9 and 10 have bugs in the workshopper that will cause your solution to always fail as documented [here](https://github.com/stevekane/promise-it-wont-hurt/pull/112). Complete and leave it failed or skip it altogether.
* [ ] [Step-by-step tutorial to build a modern JavaScript stack](https://github.com/verekia/js-stack-from-scratch)

  * [Part 08](https://github.com/verekia/js-stack-from-scratch/blob/master/tutorial/08-bootstrap-jss.md) 
    * There is a reported [issue](https://github.com/verekia/js-stack-from-scratch/issues/202) for the `react-jss` package.
    * Stick to the 5.3.0 version by running: `npm install react-jss@5.3.0` or `yarn add react-jss@5.3.0` to avoid the newer breaking updates.

  * [Part 09](https://github.com/verekia/js-stack-from-scratch/blob/master/tutorial/09-travis-coveralls-heroku.md)
    * Create a separate repository, it makes it easier to set up CI and to Deploy your app.
    * Read through [this gist](https://gist.github.com/Faultless/cbb014364dc1a5440ab6473a9a3608ab) for **major** changes to the CI stack.
    * **Before** trying to **deploy** to Heroku, **Remove** the `--progress` flag from your `prod:build` script.

  * Badges
    * **Once done**, update the badges placeholders above with ones specific for your application.
    * You can get the badges by visiting [shields.io](http://shields.io/). You can get Tokens from CircleCI's and Codecov's respective websites.

## [React](https://facebook.github.io/react/)

* [ ] [Intro To React](https://facebook.github.io/react/tutorial/tutorial.html)
* [ ] [React Express](http://www.react.express/)
* [ ] [Create React App](https://github.com/facebookincubator/create-react-app)
* [ ] [Testing with Jest](https://facebook.github.io/jest/docs/tutorial-react.html)
* [ ] [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)

## Putting it All Together

Now that you have completed the training you can put it to practice to see how far your skills have evolved. Apply what you have learned by either revamping the code-challenge submission or writing an application from scratch that demonstrates the skills learned.

* [ ] [https://github.com/username/my-application](https://github.com/username/my-application)

See also: [The Postlight Engineering Library](https://trello.com/b/Sgol3uST/postlight-engineering-library).

## PHP
* Windows 10 users, please [install and use the Linux Bash Shell](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/) before going on with this tutorial
* Follow the instructions on [PHP School](https://www.phpschool.io/) to accomplish the following workshops:
  * [ ] [Learn You PHP](https://github.com/php-school/learn-you-php)
    * The last exercise (Dependency Heaven) might fail to verify due to case sensitivity issue in the headers: `Pragma: no-cache` - `pragma: no-cache` 
  * [ ] [Callable Functions](https://github.com/NastasiaSaby/callable-functions)
  * [ ] [PHP7 way](https://github.com/NastasiaSaby/php7-way)

* Optional: 
  * [ ] Build a modern API using [Slim PHP](https://www.slimframework.com/) by following this [tutorial](https://www.slimframework.com/docs/tutorial/first-app.html)

---

What else should be here? See a mistake? Send a pull request or open an issue.
