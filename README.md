# Marionette + Foundation example

Way to understand `Marionette` + `Foundation`.

## Quickstart
This is very hard to determine entry point. The mixture is the following:

* [Marionette.js](http://marionettejs.com/) with dependencies
* [Foundation](http://foundation.zurb.com/) with its dependencies too
* [Bower](http://bower.io/) as Web-packages manager

Please consider the following places to understand what is under the hood:

  * `bower.json` it describes packages used in project
  * `.bowerrc` **bower** web packages manager config. This is folder where bower packages installed to. These are shared JavaScript libraries so they are ignored by git.
  * `config.rb` [compass](http://compass-style.org/) configuration files. Some paths and setting are covered here. Feel free to change something and watch how `compass watch` will become nuts.
  * `index.html` sorry, right now it's static. No comments here :-(
  * `.gitignore` watch out stuff described here tends to be be overwritten!

## Workflow 
Then when you're working on your stylesheet i.e. hacking Foundation styles, just run the following command:

```bash
compass watch
```

Play with `./assets/scss/_settings.scss` and watch the magic.
Statement above will recreate `css` stylesheet from your `scss` templates on the fly.

## Upgrade

If you'd like to upgrade to a newer version of Foundation or Marionette or etc. down the road just run:

```bash
bower update
```

##TODO

That is the favorite part.

* Follow the book i.e. finish yet another *TodoApp*
* Add some Ruby backend (*Sinatra*?)
  * To serve HAML templates
  * To eliminate assert hell
* Add some event driven Ruby backend
  * Push server messages (*Goliath* + *WebSockets*?)
  * To store something to *PostgreSQL*
  * To store something to *Redis*
* Add some event driven Node.js backend for somewhat
* Add `Cucumber` tests with JavaScript testing
* Add `Guardfile`
