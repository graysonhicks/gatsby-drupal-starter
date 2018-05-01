# gatsby-drupal-default
A barebones starter for getting up and running with Gatsby + Drupal.

## What to Expect
The point of this repo is to get you started with the [Gatsby Default Starter](https://github.com/gatsbyjs/gatsby-starter-default) but with a few tweaks to start off with one of your data `source`s being Drupal.

There is an example of a site like this [here](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-drupal), but since it is nested in Gatsby's main repo, it cannot be cloned alone.

After the initial install, if everything works, you can change the endpoint to point to your own Drupal site.

## Install

1. Clone this repo with: `git clone git@github.com:graysonhicks/gatsby-drupal-starter.git`
2. `cd` into `gatsby-drupal-starter`
3. Run `npm install`
4. Run `gatsby develop`
5. Go to `localhost:8000` and you should see a list of recipe titles

## Customize Endpoint

The endpoint in this starter is `https://live-contentacms.pantheonsite.io/api` by default, which is a courtesy endpoint for learning about this process.  The endpoint where you want to retrieve your Drupal data is set in the [`gatsby-config.js`](gatsby-config.js) file.