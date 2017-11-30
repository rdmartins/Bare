#!/bin/bash
yarn=true;
error=false;

if ! hash ruby 2>/dev/null; then
  error=true;
  echo "Ruby not found.";
fi
if ! hash bundle 2>/dev/null; then
  error=true;
  echo "Bundler not found.";
fi
if ! hash yarn 2>/dev/null; then
  yarn=false;
  echo "Yarn not found, trying NPM...";
  if ! hash npm 2>/dev/null; then
    error=true
    echo "NPM not found."
  fi
fi

if [ "$error" = true ]; then
  echo "Aborting.";
  exit 1;
fi

export GEM_HOME=$(ruby -e 'print Gem.user_dir');

bundle install

if [ "$yarn" = true ]; then
  yarn;
else
  npm install;
fi

mkdir _data _drafts _layouts _posts;
rm -Rf .git init.sh;
git init;
git add .;
git commit -m "bare new website";
gulp;
