const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,"client")));
app.use(bodyParser.json());
const publicVapidKey = "BJZliZvDe0wQR_eFF0RfXHJCmEeyqie8VRiOMOostIyIQ0VMrDgmzdfpGgIzuQ_3UnQrwPQLu_bKr4_AJavLZmk";

const privateVapidKey = "FghkGGuVySith1APcGqUsY3bnTAPtHwjAzNNVp9Bqn4";

webpush.setVapidDetails('mailto:visheshjindal368@gmail.com',publicVapidKey,privateVapidKey);
//subscribe Route

app.post('/subscribe',(req,res)=>{

    const subscription = req.body;
    res.status(201).json({});

    const payload = JSON.stringify({title:'push Test'});

    webpush.sendNotification(subscription,payload).catch(err =>console.error(err));
});


const port = 8000;

app.listen(port,() => console.log(`Server started on port ${port}`));