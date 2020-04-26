#! /bin/bash -e

PORT=3000
SCRIPTPATH="$( cd "$( dirname "$0" )" && pwd )";
cd $SCRIPTPATH/../

./scripts/build.sh
open http://localhost:$PORT
node ./scripts/dev_server.js $PORT
