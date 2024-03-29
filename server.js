const moment = require ('moment');
const express = require ('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())

const messageList = [];



app.post('/api/messages', (req, res) => {
	res.send('ok');

	const message = req.body;

	message.date = moment().format('HH:mm');

	messageList.push(message);
});

app.get('/api/messages', (req, res) => {
	res.send(messageList)
});

app.get("*", function(req, res) {
	res.status(404).send("Error! That route doesn't exist. You are lost")
})



app.listen(port, () => {
	console.log(`Express running → PORT ${port}`);
});