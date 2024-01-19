# Midpoint Webhook

Um simples projeto para facilitar o uso de **Webhooks** com os sistemas da CommercePlus e HoopDecor. A ideia dele é deixar uma máquina local acessível para o uso de Webhooks usando [Ngrok](https://ngrok.com/), e utilizar um app em [Node.js](https://nodejs.org/en) para redirecionar as requests para o projeto principal que processa os Webhooks recebidos. Para receber as requests usa [Express.js](https://expressjs.com/) e para redirencionar usa a lib [Axios](https://axios-http.com/docs/intro).

Para rodar, é necessário primeiro baixar os pacotes NPM, abra um Terminal dentro da pasta do projeto e digite:

    npm install

Depois, para rodar o servidor, digite:

    npm start
   
   Agora, em um segundo Terminal, rode o **Ngrok**:

    ngrok http 3000
