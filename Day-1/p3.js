const fs = require('fs');
const data = "I am new Data file";
fs.writeFileSync('data.txt', data); //write data to file