// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, 
//add it to the db.json file, and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved
// (look into npm packages that could do this for you).

const fs = require('fs'); //import npm fs for read, wrtie and delete files
const path = require('path');// import npm path for file paths(join,parsing)

module.exports = function(app) { // export a function allow other files to import and use this function 

  ///get request  （retrieve data from a server）.///////
  app.get('/api/notes', (req, res) => { //set get routes for  the api/notes endpoint 
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => { // red the file db.json, also set utf8 for easy to read
      if (err) {
        return console.log(err);
      }
      res.json(JSON.parse(data)); //if file is success readed  then use json.parse(data) to response to client
    });
  });

//POST request （submit data to server to create or update a resource）.//
  app.post('/api/notes', (req, res) => { // set post route for api/notes endpoint 
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => { //
      if (err) {
        return console.log(err);
      }
      
      let notesData = JSON.parse(data);
      let newNote = req.body;
      newNote.id = Date.now().toString();
      notesData.push(newNote);

      //write file back to db.json after all the update had been made 
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesData, null, 4), err => {
        if (err) {
          return console.log(err);
        }
        res.json(newNote);
      });
    });
  });


  /////delete///////////////////////////////
  //read the data from bd.json file transfer to UTF8 for readable string
  app.delete('/api/notes/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => { // read the json file that is stored in the notes
      if (err) {
        return console.log(err);
      }
      ///parse the the json data and turn to javaScript object
      let notesData = JSON.parse(data); // parse the json data
      let noteId = req.params.id; // get the note that want to delete 
      notesData = notesData.filter(selected =>{return selected.id != noteId}); // filtrer out the notes if the id is matched


      //write the updated file  back to json file  db.json file 
      fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesData, null, 4), err => { //convert the notesData object to a better formatted JSON string
        if (err) {
          return console.log(err);
        }
        res.json({id: noteId, message: 'Note deleted.'}); //response to client that the note is deleted 
      });
    });
  });
};