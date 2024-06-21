const express = require('express')
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser');
const port = 8001;
const cors = require('cors');
const {connectToMongoDb} = require('./connection')
const questionRouter = require('./routes/question.route')
const User = require('./models/users.model');
connectToMongoDb("mongodb://localhost:27017/quiz");

app.use(cors())
app.get('/',(req,res)=>{
  res.send("Hello world");
})



// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));



// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(session({
//   secret:'HolaHachiboo',
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Passport Local Strategy
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use('/users', require('./routes/user.route'));
app.use('/api/question',questionRouter);

app.listen(port,()=>console.log(`Server started at http://localhost:${port}`))