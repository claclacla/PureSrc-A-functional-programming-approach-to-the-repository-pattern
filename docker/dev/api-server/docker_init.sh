#!/bin/bash

echo "
Install npm packages for node app...
"

npm i --prefix /usr/src/app/src

echo "
Start app...
"

pm2-docker start /usr/src/app/src/bin/www
