# gatsby-drupal-starter
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

## Custom Endpoint

The endpoint in this starter is `https://live-contentacms.pantheonsite.io/api` by default, which is a courtesy endpoint for learning about this process.  The endpoint where you want to retrieve your Drupal data is set in the [`gatsby-config.js`](gatsby-config.js) file.

### Endpoint Requirements

Any endpoint that is defined as a `gatsby-source-drupal` in `gatsby-config.js` must:

1. Be a Drupal site (the `gatsby-source-drupal` plugin does special parsing with this assumption)
2. Have the [Drupal JSONAPI module](https://www.drupal.org/project/jsonapi) installed.

### Default Endpoint Data

This repo does not control or cover how to build your Drupal endpoint.  

To see the JSON that is returned, [hit the API directly](https://live-contentacms.pantheonsite.io/api) in your browser (a JSON viewer is helpful for readability here)

To explore it in GraphQL, use Gatsby's GraphiQL tool by going to http://localhost:8000/___graphql.  Once there, below the commented instructions, type a pair of `{ }` keep your cursor between them, and hit `ctrl + space` to see an autocomplete list of data available for querying.  Continue to use this `{ }` + `ctrl + space` method to explore the many nested levels of the data.

### Custom Endpoint Data

When you choose to hit your own endpoint, [here](http://dev-gatsby-drupal.pantheonsite.io/jsonapi/) is an example of a Drupal 8 endpoint with JSONAPI installed.  This example only has one `Article` as its content.

## Custom Design

This repo is basebones when it comes to styles.  You can leverage all of Gatsby's data sources (use your Drupal data, Markdown, React components) along with whatever style library (vanilla CSS, styled-components, etc) to begin building your site.

If you think you understand the use of Gatsby `source` plugins, you can always try [another Gatsby starter](https://www.gatsbyjs.org/docs/gatsby-starters/#gatsby-starters) and add your endpoint the same way it is added in this project.

## Further Reading
For more info on Gatsby + Drupal:
- https://www.gatsbyjs.org/packages/gatsby-source-drupal/
- https://github.com/gatsbyjs/gatsby/tree/master/examples/using-drupal

For a more detailed documentation of Gatsby, here is another starter I did:
- https://github.com/graysonhicks/gatsby-starter-skinny-docs