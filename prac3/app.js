
const express = require('express');
const app = express();
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const path = require('path');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});












app.listen(3000);

// const bcrypt = require('bcrypt');   //encryption and decryption
// const jwt = require('jsonwebtoken');

// app.get('/', function (req, res) {
//     let token =jwt.sign({email: "harsh@example.com"}, "secretkey");
//     res.cookie("token", token);
//     console.log(token);
// });

// app.get("/read", function (req, res){
//    let data = jwt.verify(req.cookies.token, "secretkey");
//    console.log(data);
// })

// app.get('/', (req, res) => {
//     // res.cookie("name","harsh");
//     // res.send("done");
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash("1234", salt, function (err, hash) {
//             console.log(hash);
//         })
        
//     })
// });

// app.get('/read', function (req, res) {
//     console.log(req.cookies);    
//     res.send("read pages");
// });

//decryption
// app.get('/', (req, res) => {
//    bcrypt.compare("1234","$2b$10$AmoTFM0rAbluFYYWktupTObewhRoqoa3kUwK2oA23OZbryfPZot06",
//     function (err, result) {
//         console.log(result);
//     })
//    });

