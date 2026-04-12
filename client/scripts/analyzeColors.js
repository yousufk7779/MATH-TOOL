const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../assets/chapters');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.svg')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    return arrayOfFiles;
}

const svgFiles = getAllFiles(baseDir);

const colorCounts = {};

svgFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');

    // Find stroke and fill hex codes and color words
    const regex = /(?:stroke|fill)(?::|\s*=\s*["']?)\s*(#(?:[A-Fa-f0-9]{3}){1,2}|[a-zA-Z]+)(?![a-zA-Z0-9])/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        let color = match[1].toLowerCase();
        if (color !== 'none' && color !== 'white' && color !== '#fff' && color !== '#ffffff' && color !== 'black' && color !== '#000' && color !== '#000000' && color !== '#333' && color !== '#333333' && color !== '#555' && color !== '#555555' && color !== '#ddd' && color !== '#dddddd') {
            colorCounts[color] = (colorCounts[color] || 0) + 1;
        }
    }
});

console.log(Object.entries(colorCounts).sort((a, b) => b[1] - a[1]).slice(0, 20));
