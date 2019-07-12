# Open Source Miami's Component Library
[![Netlify Status](https://api.netlify.com/api/v1/badges/e19d8b1e-882e-4c7a-9db4-170665a7aaff/deploy-status)](https://app.netlify.com/sites/osmiami-lib/deploys)

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

A React component library created so that we could standardize the design and behavior throughout all of our sites and products. The objective is not to make a full component library like Material, or Bootstrap. We are just planning to make whatever is needed to complete our projects, and accumulate all of the components over time.

## Storybook

This project is utilizing a JavaScript Library called [Storybook](https://storybook.js.org/) which is, "an open source tool for developing UI component in isolation for React, Vue, and Angular." This UI allows us to catalog all of our components and documentation in one place. Storybook runs alongside your app in development mode.

Building the UI Components first follows a [Component-Driven Development](https://blog.hichroma.com/component-driven-development-ce1109d56c8e) methodology. 

To start building components with Storybook, take a look at the documentation [here](https://www.learnstorybook.com/react/en/simple-component/)


## Getting Started - Local Development

If you have Node and Typescript installed on your system getting started should be fairly simple. 


1. Clone or Fork [the repo](https://github.com/open-source-miami/component-library) (Should you clone or fork the repo? Checkout [Contributing](#contributing))

```sh

        git clone https://github.com/open-source-miami/component-library.git

```

2. Install node modules

```sh

        npm install

```

3. Run Projects locally

```sh

        npm run start

```

The script should open the local version of our component storybook in your default browser. If all is well you should see our storybook on http://localhost:6006/

If you need additional information about setting up your development environment take a look at our [setup doc](./docs/setup.md). 

## Deploying this project

The static version of the site is going to be deployed to [Netlify]((https://www.netlify.com/). Netlify makes it incredibly easy to deploy just give it authorization to access the repo, and let it know how to build the static files, in our case:

```sh
        npm run build-storybook
```

Then you just tell it where the static files are going to be stored, with most projects it would be called `build` or `dist`, but for this project static files are stored under `storybook-static`.

See the status of our latest deployment: [![Netlify Status](https://api.netlify.com/api/v1/badges/e19d8b1e-882e-4c7a-9db4-170665a7aaff/deploy-status)](https://app.netlify.com/sites/osmiami-lib/deploys)

Our site is hosted [here](https://osmiami-lib.netlify.com/)


## Contributing

For information on how you could help us build out these components, and improve the library take a look at the [contributing](./CONTRIBUTING.md) doc.

If this is your first time contributing to an Open Source Project, maybe it would be a good idea to take a look at [this short course](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) by Kent C Dodds.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->

<table>
        <tr>
        <td align="center"><a href="https://github.com/aromanarguello"><img src="https://avatars0.githubusercontent.com/u/28843542?v=4" width="100px;" alt="aromanarguello"/><br /><sub><b>aromanarguello</b></sub></a><br /><a href="#infra-aromanarguello" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/open-source-miami/component-library/commits?author=aromanarguello" title="Tests">⚠️</a> <a href="https://github.com/open-source-miami/component-library/commits?author=aromanarguello" title="Code">💻</a>
        </td>
        <td align="center"><a href="http://sherwino.co"><img src="https://avatars2.githubusercontent.com/u/2348227?v=4" width="100px;" alt="Sherwino"/><br /><sub><b>Sherwino</b></sub></a><br /><a href="https://github.com/open-source-miami/component-library/commits?author=sherwino" title="Documentation">📖</a>
        </td>
        </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->
We are going to try to follow the [all-contributors](https://github.com/all-contributors/all-contributors#emoji-key) specification.

We have a bot installed in all of our repos, to help us manage contributors list, for info on how to use it take a look at the docs [here](https://allcontributors.org/docs/en/bot/usage)

## Components

For a full list of components featured in this repo take a look at [components](./docs/components.md) doc, or better yet take a look at the Storybook online [here](https://osmiami-lib.netlify.com/)

## Examples

We should probably give you some live examples of how to use these components.
