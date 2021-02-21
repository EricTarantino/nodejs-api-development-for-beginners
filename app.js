const fs = require('fs');
// const express = require('express');

const fileName = 'target.txt';

const errHandler = (err) => console.log(err);

const dataHandler = (data) => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
  if (err) {
    errHandler(err);
  } else {
    dataHandler(data);
  }
});

console.log('Nodejs async programming');
