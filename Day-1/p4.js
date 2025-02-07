const fs = require('fs');

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading this", err);
    } else {
        console.log(data);
    }
});