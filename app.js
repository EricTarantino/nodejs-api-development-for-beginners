const fs = require('fs');

const fileName = 'target.txt';

fs.readFile(fileName, (err, data) => {
    if (err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

console.log("Nodejs async programming");