const express = require('express');
const app = express();
const path = require('path');
const sendMail = require('./mail');


// parsing the data 
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.post('/email', (req,res) => {

    const {name,email,message} = req.body;

    console.log("data:" , req.body);
    sendMail(email,name,message, function(err,data) {
        if (err) {
            res.json({message: "Error"});
        }
        else {
            res.json({message: "message reciveved"});
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});