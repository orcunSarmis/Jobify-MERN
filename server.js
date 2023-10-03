import express from'express'
const app = express()

app.get('/', (req, res) => {
	res.send('amk');
});

app.listen(5100, () => {
	console.log('oldu bu is...');
});

