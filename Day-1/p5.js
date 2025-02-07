const fs = require('fs');

const content = 'Hello, this is a test content!';

fs.writeFile("./data.txt", content, 'utf8', (err) => {
    if (err) {
        console.error('An error occurred while writing to the file:', err);
        return;
    }
    console.log('File has been written successfully.');
});