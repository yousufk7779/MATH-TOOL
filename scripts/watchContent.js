const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const ASSETS_DIR = path.join(__dirname, '../client/assets');
const GENERATOR_SCRIPT = path.join(__dirname, 'generateChapterContent.js');

let isGenerating = false;

console.log(`Watching for changes in ${ASSETS_DIR}...`);

fs.watch(ASSETS_DIR, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.html')) {
        if (isGenerating) return;

        console.log(`Detected change in ${filename}. Regenerating content...`);
        isGenerating = true;

        exec(`node "${GENERATOR_SCRIPT}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error generating content: ${error.message}`);
            } else {
                if (stderr) console.error(`Generation stderr: ${stderr}`);
                console.log(stdout);
                console.log('Content updated successfully.');
            }
            isGenerating = false;
        });
    }
});
