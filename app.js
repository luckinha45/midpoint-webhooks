const express = require('express');
const axios = require('axios');
const { response } = require('express');
const app = express();
const port = 3000;

// muda a forma de interpretar o dado enviado, se for um json, usa a primeira, se for no formato de de form de post, usa a segunda
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//#region CommercePlus

app.post('/PostPed/:apikey', async (req, res) => {
	console.log(req.body);
	const key = req.params.apikey;

	// Enviando para o Visual Studio
	
	axios.post(`http://localhost:56464/IntegracaoLift/PostPedidoCommPlus/${key}`, {
		//data: req.body,
		...req.body
	})
	.then((r) => {
		console.log(r.data);
		res.send(r.data);
	})
	.catch((error) => {
		console.log(error);
		res.send(error);
	});
})
//#endregion

//#region HoopDecor

app.post('/PostOrc/:apikey', async (req, res) => {
	console.log(req.body);
	const key = req.params.apikey;

	// Enviando para o Visual Studio
	axios.post(`http://localhost:13523/IntegracaoLift/PostOrcamento/${key}`, {
			data: req.body.data,
		})
		.then((r) => {
			//console.log(r.data);
			res.send(r.data);
		})
		.catch((error) => {
			console.log(error);
			res.send(error);
		});
})

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}\n`)
})
//#endregion