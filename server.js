import * as dotenv from 'dotenv';
dotenv.config();
import express from'express';
const app = express();
import morgan from 'morgan';

try {
	const response = await fetch(
		'https://www.course-api.com/react-useReducer-cart-project'
	);
	const cartData = await response.json();
	console.log(cartData);
} catch (error) {
	console.log(error);
}

if(process.env.NODE_ENV=== 'development') {
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

const port = process.env.PORT || 5100


app.listen(port, () => {
	console.log(`oldu bu is PORT ${port}...`);
});

