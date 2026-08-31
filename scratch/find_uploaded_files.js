const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain';
const currentConv = '036ab895-c67b-4d10-961e-ce89f4772aae';

function checkConv(id) {
  const dir = path.join(brainDir, id, '.user_uploaded');
  if (fs.existsSync(dir)) {
    console.log(`Found .user_uploaded in ${id}:`, fs.readdirSync(dir));
  } else {
    console.log(`No .user_uploaded in ${id}`);
  }
}

checkConv(currentConv);

// Also check all subfolders of brainDir
fs.readdirSync(brainDir).forEach(item => {
  const full = path.join(brainDir, item);
  if (fs.statSync(full).isDirectory()) {
    const uploaded = path.join(full, '.user_uploaded');
    if (fs.existsSync(uploaded)) {
      console.log(`User uploaded in ${item}:`, fs.readdirSync(uploaded));
    }
  }
});
