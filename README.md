# hugo-fluent For Hugo, a mobile-first responsive theme styled with
[tailwindcss][1] v3 (at fall 2021, v3.0.0-alpha.2 which is perfectly usable for most).

This project includes a workaround for using current Hugo with Tailwindcss Just-In-Time
compiler (the only default compilter in v3).

## Overview

`hugo-fluent` is a release-early, release-often Hugo theme styled using
[tailwindcss][1]. The currently offers the following components:

* Home/landing page
* Article-oriented pages
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

A shell script in `exampleSite` to start the example site:

    ./dev.sh

Or, use the npm tooling (see `package.json` for other commands), e.g.:

    # for dev, launches two processes, postcss and hugo, in parallel in "watch" mode
    npm run dev 
    
    # build the static site
    npm run build # builds

## Customization Requirements

If you add layout overrides to your site or otherwise customize the theme,
you'll need to install [tailwindcss][1] and related tooling to regenerate and
minimize the CSS based on your customizations. 

Global tools needed:
    npm

And `postcss-cli`:

    npm install -g postcss-cli

Run:
    npm install


## Changes

* 2021-10-03 Move to Tailwind 3.0.0-alpha.1 and change tooling to use Tailwind JIT (available since tw 2+). See https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.0.0-alpha.1.

[1]: <https://tailwindcss.com/>
