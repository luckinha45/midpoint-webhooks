const express = require('express');
var bodyParser = require('body-parser');
const axios = require('axios');
const { response } = require('express');
const app = express();
const port = 3000;

// muda a forma de interpretar o dado enviado, se for um json, usa a primeira, se for no formato de de form de post, usa a segunda
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// https://8a44-2804-818c-408c-6c00-2605-e000-8ded-8967.ngrok-free.app/PostPed/968E874B-F378-48EE-B02D-E3E4D0ADE192
// HTTP://SISTEMALIFT1.COM:8082/API/INTEGRACAOLIFT/PostPedidoCommPlus/968E874B-F378-48EE-B02D-E3E4D0ADE192

// WEBHOOK COMMERCEPLUS
// key color: 968E874B-F378-48EE-B02D-E3E4D0ADE192
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

// https://9fcb-2804-818c-408c-6c00-2605-e000-8ded-8967.ngrok-free.app/PostOrc/E1E2B1BA-A4B8-42A5-9E19-E4633BF86F9C

// WEBHOOK HOOP
// key lift: E1E2B1BA-A4B8-42A5-9E19-E4633BF86F9C
// key DE: F3A9F930-39D1-48AC-9DC3-774D1084040F
app.post('/PostOrc/:apikey', async (req, res) => {
	console.log(req.body);
	const key = req.params.apikey;

	// Enviando para o Visual Studio
	axios.post(`http://localhost:56464/IntegracaoLift/PostOrcamento/${key}`, {
			data: req.body.data,
		})
		.then((r) => {
			//console.log(r.data);
			res.send(r.data);
		})
		.catch((error) => {
			//console.log(error);
			res.send(error);
		});
})

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}\n`)
})
