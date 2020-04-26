#! /bin/bash -e

SCRIPTPATH="$( cd "$( dirname "$0" )" && pwd )";
cd $SCRIPTPATH/../

rm ./dist/* || true

FILENAME="main.bundle.$( date +%s ).js"

webpack -o $SCRIPTPATH/../dist/$FILENAME
cat ./public/index.html | sed "s/main.js/$FILENAME/g" > ./dist/index.html
