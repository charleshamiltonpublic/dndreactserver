- This is the server side of a dnd combat tracker app
- It uses MongoDB as a backend database
- The backend API is hosted on Heroku here: https://dnd-react.herokuapp.com/
- The React frontend is hosted on Netlify here:  https://frosty-noyce-73153e.netlify.app/
- To run locally, put server and client folder in same folder, rename both to "server" and "client"
- cd into server folder and run 'npm run dev'.
- This project is set to use the concurrently node package to run locally. Unless you change the scripts
- to reflect that the folders are NOT named "server" and "client" in package.json,
- the default scripts will not work if you do not rename these two folders.
