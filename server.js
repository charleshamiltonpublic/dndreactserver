const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
//const cors = require('cors');
require("dotenv").config();
//const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI='mongodb+srv://barney:9tHk3iM1wkDkFi53@cluster0.dmvek.mongodb.net/DNDDatabase?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});


// //Saving data to our mongo database
// const data = {
//     title: 'Welcome to my Youtube Channel',
//     body: 'I help folks become a fullstack developer.'
// };

// const newBlogPost = new BlogPost(data);

// newBlogPost.save((error) => {
//     if (error) {
//         console.log('Ooops, something happened');
//     } else {
//         console.log('Data has been saved!!');
//     }
// });


//app.use(cors());

//Data parsing
app.use(express.json());
// app.use(cors({
//     origin: ['https://frosty-noyce-73153e.netlify.app', 'http://localhost:3000']
// }));
app.use(express.urlencoded({extended: false}));
//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

// app.get("*", (req, res) => {
//     let url = path.join(__dirname, '../client/build', 'index.html');
//     if (!url.startsWith('/app/')) // since we're on local windows
//       url = url.substring(1);
//     res.sendFile(url);
//   });

