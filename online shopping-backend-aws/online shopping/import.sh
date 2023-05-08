#! /bin/bash
mongoimport --host 127.0.0.1:27017 -d shopping -c roles --jsonArray --file /tmp/roles.json