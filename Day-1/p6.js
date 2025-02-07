const fs = require('fs');
const data = 'Hello, this is an append test content!';

fs.appendFile('./data.txt', data, 'utf8', (err) => {
    if (err) {
        console.error('An error occurred while writing to the file:', err);
        return;
    }
    console.log('File has been written successfully.');
});