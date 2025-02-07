const fs = require('fs');
const path = fs.mkdir('MyFolder',{recursive: true} , (err) => {
    if (err) {
        console.error('An error occurred while creating the directory:', err);
        return;
    }
    console.log('Directory has been created successfully.');
});