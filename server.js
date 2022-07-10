const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());

app.use('/login', (req, res) => {
    console.log(req.body);
    if(req.body.username == "hola" && req.body.password == "mundo"){
        res.send({
          token: 'test123'
        });

    }
});
app.use('/inspectionlist', (req, res) => {
    console.log(req.body);

});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));