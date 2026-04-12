const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const files = [
    'generate_ch3.js',
    'generate_ch8.js',
    'generate_ch9.js',
    'generate_ch10.js',
    'generate_ch11.js',
    'generate_ch12.js',
    'generate_ch13.js',
    'generate_ch14.js'
];

files.forEach(file => {
    const filepath = path.join(__dirname, file);
    if (!fs.existsSync(filepath)) return;
    
    console.log(`Running ${file}...`);
    try {
        execSync(`node ${file}`, { cwd: __dirname });
        console.log(`Successfully regenerated ${file}`);
    } catch (error) {
        console.error(`Error running ${file}:`, error.message);
    }
});
