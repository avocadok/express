const express = require ('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())

const messageList = [];



app.post('/api/messages', (req, res) => {
	res.send('ok');
	messageList.push(req.body);
	console.log(req.body);
});

app.get('/api/messages', (req, res) => {
	res.send(messageList)
})



app.listen(port, () => {
	console.log(`Express running → PORT ${port}`);
});