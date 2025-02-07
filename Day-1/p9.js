const fs = require('fs');
const path = fs.rmdir('MyFolder', (err) => {
    if (err) throw err;    
    console.log('Directory has been deleted successfully.');
});