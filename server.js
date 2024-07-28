require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = 3000;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: '*'
}));

server.listen(PORT, () => {
    console.log(`Сервер зпущен на порту ${PORT}`)
})
