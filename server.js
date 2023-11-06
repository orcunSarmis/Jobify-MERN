import * as dotenv from 'dotenv';
dotenv.config();
import express from'express';
const app = express();
import morgan from 'morgan';

if(process.env.NODE_ENV=== 'develpment') {
	app.use(morgan('dev'));
}


app.use(express.json());

app.get('/', (req, res) => {
	res.send('mad it');
});

app.post('/', (req, res) => {
	console.log(req);

	res.json({ message: 'Data received', data: req.body });
});

app.listen(5100, () => {
	console.log('oldu bu is...');
});

