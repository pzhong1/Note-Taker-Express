## The URL of the functional, deployed application.

## The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.  
https://github.com/pzhong1/Note-Taker-Express.git

## TASK
 Create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file  

## package need to install
npm install fs , path , express, insomnia,  node.js 

## to run this project
open terminal, go to the right dir and type nodemon server.js and lisnning on localhost:3001 

## User Story
AS A small business owner  
I WANT to be able to write and save notes  
SO THAT I can organize my thoughts and keep track of tasks I need to complete  

## Acceptance Criteria
GIVEN a note-taking application  
WHEN I open the Note Taker  
THEN I am presented with a landing page with a link to a notes page  
WHEN I click on the link to the notes page  
THEN I am presented with a page with existing notes listed in the left-hand column,  plus empty fields to enter a new note title and the note’s text in the right-hand column  
WHEN I enter a new note title and the note’s text  
THEN a Save icon appears in the navigation at the top of the page  
WHEN I click on the Save icon  
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes  
WHEN I click on an existing note in the list in the left-hand column  
THEN that note appears in the right-hand column  
WHEN I click on the Write icon in the navigation at the top of the page  
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column  

## Getting Started
The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.  

The following HTML routes should be created:  

GET /notes should return the notes.html file.  

GET * should return the index.html file.  

The following API routes should be created:  

GET /api/notes should read the db.json file and return all saved notes as JSON.  

POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
 ## screenshot
![Screenshot 2023-07-09 at 10 56 15 PM (2)](https://github.com/pzhong1/Note-Taker-Express/assets/123424361/a0de2148-32c2-4cd8-974c-c60bafdfc2c6)

![Screenshot 2023-07-09 at 10 57 16 PM (2)](https://github.com/pzhong1/Note-Taker-Express/assets/123424361/0aef11fa-b5dd-46c0-9c9c-0db3bf1f90c3)

<img width="1440" alt="Screenshot 2023-07-09 at 11 00 32 PM" src="https://github.com/pzhong1/Note-Taker-Express/assets/123424361/0b34702c-9215-4f42-a46f-627ffcf66881">
