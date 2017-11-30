# Bare

Gulp, Sass, jekyll and Browsersync configuration for new websites

## Getting Started

Clone this repo and run the init script.
That will leave you with:

* A basic jekyll structure;
* Blank assets files (functions.js and main.sass);
* A index-header-footer boilerplate;
* A gulp configuration ready to:
  * Concatenate, preprocess (Sass, compressed) and autoprefix your stylesheets;
  * Concatenate, preprocess (Babel) and minify your scripts.
* A **NEW** git repository;
* A a running browser-sync server.

*Please, note that the init script will destroy the bare repo and initiate a new repo on it's place.*

### Prerequisites

To use Bare you'll need:

* Ruby;
* Bundler;
* Node;
* Yarn (or NPM);

It will install jekyll for you.

### Installing

#### Node and npm

Check if you have [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) with `$ node --version` and `$ npm --version`.
If the commands outputs an error instead of the software version, [install](https://docs.npmjs.com/getting-started/installing-node) Node and npm.
The installation may differ from distro to distro, and it's best to learn how to install from your distro wiki.

Alternatively, Bare can work with a package manager called [Yarn](https://yarnpkg.com/en/).
Yarn works with the npm base repositories, but have some improvements upon npm itself.

#### Ruby and Bundler

Check if you have [Ruby](https://www.ruby-lang.org/en/) installed with `$ ruby --version`.
You can learn how to install Ruby on your distro wiki.

You can check if you have the [Bundler](http://bundler.io/) gem installed with `$ bundler --version`.
In case of error, you can install it with `$ gem install bundler`

#### jekyll

The last dependency is jekyll.
jekyll can be installed with `$ gem install jekyll`;

*The init script will install jekyll for you.*

### Using

Now, all you need to do is clone the repo and run the init script:

```
$ git clone https://gitlab.com/rdmartins/bare.git my_bare_new_website
$ cd my_bare_new_website/
$ ./init.sh
```

The script will perform this actions for you:

1. Test for Ruby, Bundler and NPM;
2. Install the jekyll gem and it's dependencies;
3. Install all node dependencies;
4. Create jekyll basic file structure;
5. Remove the init script;
6. Destroy the git repo;
7. Create a brand new git repo and make the first commit;
8. Start the Browsersync server.

Note that you can ignore this step and perform the required actions by hand.

## Author

* **Rafael D Martins**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
