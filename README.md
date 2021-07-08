# hugo-fluent
For Hugo, a responsive theme styled with [tailwindcss][1].  XXX ADD DEMO LINK.

**July 8, 2021: `hugo-fluent` is a new project and is work in progress. Check
back for a working release in the next day or so.**

## Overview

`hugo-fluent` is a release-early, release-often Hugo theme styled using
[tailwindcss][1]. The currently offers the following components:

* Home/landing page
* Article-oriented pages (suitable for blogs, too)
* Syntax highlighting
* Customized 404 page

Coming next:

* Alternative home/landing pages
* A degree of customization using your site's config file

## Use This Theme

In your Hugo site directory:

    git init
    git submodule add https://github.com/solutionroute/hugo-fluent.git themes/hugo-fluent

Don't forget to modify your Hugo `config.yaml|toml|json` file ([Hugo
docs](https://gohugo.io/getting-started/configuration/) to specify this theme.
`yaml` example:

    theme: hugo-fluent

## exampleSite

An included `exampleSite` demonstrates the capabilities of the theme. Check out
[config.yaml](exampleSite/config.yaml) for theme configuration parameters.

A shell script makes it easy to start the example site:

    ./dev.sh

To see the effect of production CSS purging and minimization, start the script
or Hugo:

    HUGO_ENVIRONMENT=production ./dev.sh

## Customization Requirements

Tools needed:

    npm

If you add layout overrides to your site or otherwise customize the theme,
you'll need to install [tailwindcss][1] and related tooling to regenerate and
minimize the CSS based on your customizations. Run:

    npm install

[1]: <https://tailwindcss.com/>
