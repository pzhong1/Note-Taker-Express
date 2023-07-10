// GET /notes should return the notes.html file.
// GET * should return the index.html file.

const path = require('path'); //npm path takecare file and directory paths

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); // INDEX
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html')); // NOTES
  });
};
