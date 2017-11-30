#!/bin/bash
yarn=true;
error=false;

if ! hash ruby 2>/dev/null; then
  error=true;
  echo "Ruby not found.";
fi
if ! hash jekyll 2>/dev/null; then
  error=true;
  echo "jekyll not found.";
fi
if ! hash yarn 2>/dev/null; then
  yarn=false;
  echo "Yarn not found, trying npm...";
  if ! hash npm 2>/dev/null; then
    error=true
    echo "npm not found."
  fi
fi

if [ "$error" = true ]; then
  echo "Aborting.";
  exit 1;
fi

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
