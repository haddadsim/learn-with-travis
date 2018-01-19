| [Home](README.md) | [JavaScript & React](javascript.md) | [Serverless](serverless.md) | [WordPress & PHP](wordpress.md) | [GraphQL](graphql.md) | [Linux & Docker](linux.md) | [CSS](css.md) |
| ----------------- | ----------------------------------- | --------------------------- | ------------------------------- | ----------------------|--------------- | ------------- |

# [Advanced Git](https://git-scm.com/)

## Git GUI Applications

It's very important to understand how Git works via its standard command-line interface. In addition to mastering git on the command line, it can also be very useful to perform many day-to-day git operations using a more friendly graphical interface. There are many free and paid Git GUI clients available for use. Git SCM has a [good list here](https://git-scm.com/downloads/guis/). The team at Postlight prefers a few options:

- [Git Tower](https://www.git-tower.com/mac/)
    - perhaps the best graphical Git client available
    - should be your first consideration if looking for a paid client
- [Github Desktop](https://desktop.github.com/)
    - not as powerful as Git Tower, but a good free option for day-to-day activities
    - has a a nice GitHub-like diff interface
- [GitX](https://rowanj.github.io/gitx/)
    - when looking for a powerful free Git client, GitX can do many operations that Github Desktop does not accomodate for

## Squash and Merge

Commit squashing has the benefit of keeping your git history tidy and easier to digest than the alternative created by merge commits. With the introduction of GitHub's [Squash and Merge feature](https://github.com/blog/2141-squash-your-commits), it's less likely that you will need to squash commits on the command line. It is still useful, however, to know how this works and how to do it on the command line when you want more control or do not have Github's interface available. Take a look at the [detailed document outlining how to squash commits on the command line](git/squash-and-merge-cli.md).
