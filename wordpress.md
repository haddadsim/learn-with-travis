| [Home](README.md) | [Groundwork](groundwork.md) | [JavaScript & React](javascript.md) | [Serverless](serverless.md) | WordPress & PHP | [GraphQL](graphql.md) | [Linux & Docker](linux.md) | [CSS](css.md) |
|-------------------| --------------------------- | ----------------------------------- | --------------------------- | --------------- | ----------------------|--------------------------- | ------------- |

# WordPress

There are two main types of WordPress installations: standard and "headless" WordPress.

## Headless WordPress

Headless WordPress doesn't use any PHP templates. It just provides a REST API to a separate frontend (typically a Node/React app).

* [ ] Install Postlight's [Headless WordPress Starter Kit](https://github.com/postlight/headless-wp-starter).
* [ ] Issue a pull request for an outstanding issue [https://github.com/postlight/headless-wp-starter/pull/yourprnumber](https://github.com/postlight/headless-wp-starter/pull/13).

## Standard WordPress

* [ ] [Beginner's Guide to WordPress](http://videos.wpbeginner.com/): This free video series walks through the basics of WordPress (requires a free user account).

### Skills to Master

* [ ] Install standard WordPress on your local computer. To do so, clone and modify Postlight's [WordPress Starter Kit](https://github.com/postlight/headless-wp-starter) to spin up a regular (versus headless) installation. (Hint: In `Robofile.php`, don't activate the headless theme, don't delete the twentyseventeen or twentysixteen theme, do activate the twentyseventeen theme, and don't start the Node frontend.)

#### Basic WordPress Usage

In your local WordPress installation:

* [ ] Create users with different permissions.
* [ ] Publish a post.
    * [ ] Create categories with subcategories.
    * [ ] Assign categories and tags to the new post.
    * [ ] Turn comments off on the post.
* [ ] Publish a new page.
* [ ] Upload media, include in the new post and page.
    * [ ] Adjust default sizes (refer to [the Codex](https://codex.wordpress.org/Settings_Media_Screen)).
* [ ] Manage site menus (refer to [the Codex](https://codex.wordpress.org/WordPress_Menu_User_Guide)).
    * [ ] Enable support for a new menu in the theme (refer to [the Codex](https://codex.wordpress.org/Navigation_Menus)).
* [ ] Customize the look of the site using the Theme Customizer in Admin.

#### Site Configuration

In your local WordPress installation:

* [ ] Set up pretty permalinks that don't include raw post IDs (refer to [the Codex](https://codex.wordpress.org/Using_Permalinks)).
* [ ] Install a plugin like Google Authenticator, which adds 2-factor authentication to WordPress.
* [ ] Switch themes from twentyseventeen to twentysixteen.

#### Advanced Developer Plugins

* [ ] Walk through [Advanced Custom Fields documentation](https://www.advancedcustomfields.com/resources/).
    * [ ] Create custom fields for posts, pages, and categories in your theme
    * [ ] Enable [JSON synchronization of field definitions](https://www.advancedcustomfields.com/resources/local-json/).
* [ ] Create custom post types using the [CPT UI plugin](https://wordpress.org/plugins/custom-post-type-ui/).
    * [ ] Move the generated code into your theme's `functions.php`.
    * [ ] Deactivate the plugin.
* [ ] Create custom shortcodes with [Shortcake (Shortcode UI)](https://wordpress.org/plugins/shortcode-ui/).

#### Developer

* [ ] Read up on [WordPress Theme Development](https://developer.wordpress.org/themes/).
* [ ] Read up on [WP_Query](https://codex.wordpress.org/Class_Reference/WP_Query).
* [ ] Create a page template that uses a customized `WP_Query`.
    * [ ] Assign that page template to one of your pages.
* [ ] Explore the [REST API documentation](https://developer.wordpress.org/rest-api/).
    * [ ] Create [a custom API endpoint](https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/): add a custom field to categories named `order` and add a new endpoint that returns categories in a custom order based on that field.
* [ ] Install and read up on [`wp-cli`](http://wp-cli.org/).
    * [ ] Activate and deactivate a plugin using `wp-cli`.
* [ ] Read up on [WordPress filters and actions](https://codex.wordpress.org/Plugin_API).
    * [ ] Add a hook to your theme that emails you when a new post is published.

# PHP

* Windows 10 users, please [install and use the Linux Bash Shell](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/) before going on with this tutorial
* Follow the instructions on [PHP School](https://www.phpschool.io/) to accomplish the following workshops:
  * [ ] [Learn You PHP](https://github.com/php-school/learn-you-php)
    * The last exercise (Dependency Heaven) might fail to verify due to case sensitivity issue in the headers: `Pragma: no-cache` - `pragma: no-cache`
  * [ ] [Callable Functions](https://github.com/NastasiaSaby/callable-functions)
  * [ ] [PHP7 way](https://github.com/NastasiaSaby/php7-way)

* Optional:
  * [ ] Build a modern API using [Slim PHP](https://www.slimframework.com/) by following this [tutorial](https://www.slimframework.com/docs/tutorial/first-app.html)

