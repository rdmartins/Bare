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
* A running browser-sync server.

*Please, note that the init script will destroy the bare repo and initiate a new repo on it's place.*

### Prerequisites

To use Bare you'll need:

* Ruby;
* jekyll;
* Node;
* Yarn (or NPM);

### Installing

#### Node and npm

Check if you have [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/):
```
$ node --version
v9.2.0

$ npm --version
5.5.1
```
The output should be like that.
If some command output an error instead of the software version, [install](https://docs.npmjs.com/getting-started/installing-node) Node and npm.
The installation may differ from distro to distro, and it's best to learn how to install from your distro wiki.

Alternatively, Bare can work with a package manager called [Yarn](https://yarnpkg.com/en/).
Yarn works with the npm base repositories, but have some improvements upon npm itself.

#### Ruby and jekyll

Check if you have [Ruby](https://www.ruby-lang.org/en/) installed:
```
$ ruby --version
ruby 2.4.2p198 (2017-09-14 revision 59899) [x86_64-linux]
```
You can learn how to install Ruby on your distro wiki.

You can check if you have the [jekyll](https://jekyllrb.com/) gem installed with:
```
$ jekyll --version
jekyll 3.6.2
```
In case of error, you can install it with:
```
$ gem install jekyll
```

### Using

Now, all you need to do is clone the repo and run the init script:

```
$ git clone https://gitlab.com/rdmartins/bare.git my_bare_new_website
$ cd my_bare_new_website/
$ ./init.sh
```

The script will perform this actions for you:

1. Test for Ruby, jekyll and NPM;
3. Install node dependencies;
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
