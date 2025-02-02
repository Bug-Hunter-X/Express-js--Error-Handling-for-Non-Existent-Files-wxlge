const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, './index.html'));
  } catch (error) {
    console.error('Error serving file:', error);
    res.status(404).send('File not found');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});