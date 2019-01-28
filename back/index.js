require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(cors());

app.post('/', (req, res) => {
    const name = req.body.name.toLowerCase();
    if (name.length > 15) {
        res.json({ "message": "Hey your name is too long! Please try another one shorter." });
    } else if (name === 'wildtic') {
        res.json({ "message": "Hi Wildtic, we got your call!" });
    } else if(name.length>0){
        res.json({ "message": `Hi ${name}, who are you?` });
    }else{
        res.json({ "message": `` });
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
