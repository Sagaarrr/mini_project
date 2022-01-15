require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
const middlewares = require('./middleware')


const db = require('./db/dbconfig');

db
.conn()
.then((res)=>{
   
})
.catch((err)=>{
    console.log(err);
    process.exit(1);
});

const app = express();

const login = require('./routes/loginRoutes');
const bed = require('./routes/bedRoute');
const activity = require('./routes/activityRoute');

//http://localhost:4000/api/users (GET,POST)
// http://localhost:4000/api/login

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(express.json());
app.use(cors());

app.use("/api/login", login);
app.use("/api/bed" , bed);
app.use("/api/activity" , activity);

app.listen(process.env.PORT , ()=>{
    console.log('SERVER LISTENING');
})









// show dbs;
// admin          0.000GB
// cdac_2021_oct  0.000GB
// config         0.000GB
// local          0.000GB
// mini_Project   0.000GB
// > use mini_Project
// switched to db mini_Project
// > db.bds.find();
// > db.beds.find();
// { "_id" : ObjectId("61d5ea1d8c66507bd57f5641"), "bedNo" : 2, "fName" : "Kedar", "mName" : "Rani", "bMark" : "Half brain", "bDate" : "06-01-2022", "bTime" : "12:00", "bldGrp" : "O+-", "wgt" : "1.2", "__v" : 0 }
// { "_id" : ObjectId("61d5ed9d4a899c3a3ead22aa"), "bedNo" : 2, "fName" : "Pradeep", "mName" : "Rupa", "bMark" : "Blue eyes", "bDate" : "29-02-2022", "bTime" : "55:00", "bldGrp" : "O+-", "wgt" : "1.12", "__v" : 0 }