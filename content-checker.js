const fs = require('fs');
const path = require('path');

function checkFolder(folderPath) {
    // Check if the folder contains an index.md file
    const indexPath = path.join(folderPath, 'index.md');
    if (fs.existsSync(indexPath)) {
        const files = fs.readdirSync(folderPath);
        files.forEach(file => {
            const fullPath = path.join(folderPath, file);
            if (fs.statSync(fullPath).isDirectory()) checkFolder(fullPath);
        });
    } else {
        console.log(`No index.md in ${folderPath}, not going deeper.`);
    }
}

// Specify the path to start the check
const startPath = 'content';

if (fs.existsSync(startPath) && fs.statSync(startPath).isDirectory()) {
    checkFolder(startPath);
} else {
    console.log('Specified path is not a folder or does not exist.');
}
