#!/usr/bin/node
const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (error, content){
	if (err) {
    console.log(err);
  }
  console.log(data);
});
