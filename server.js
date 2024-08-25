require('dotenv').config();
const https = require('https');
const express = require('express');
const cors = require('cors');
const fs = require('fs')
const axios = require('axios');
const nodeMailer = require('nodemailer')

const PORT = 5001;
const app = express();
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/webmarvels.ru-0001/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/webmarvels.ru-0001/fullchain.pem')
}
const server = https.createServer(options, app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: '*'
}));

let mailerTransport = nodeMailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 's.gorbachev@webmarvels.ru',
        pass: 'Ft6VwK1jNBbPC63sbxzC'
    }
})

app.get('/getcontent', async(req, res) => {
    try {
        const [responseCat, responsePrice, responsePost, responseProjects] = await Promise.all([
            await axios.get('https://strapi.webmarvels.ru/api/categories?populate=*'),
            await axios.get('https://strapi.webmarvels.ru/api/prices?populate=*'),
            await axios.get('https://strapi.webmarvels.ru/api/posts?populate=*'),
            await axios.get('https://strapi.webmarvels.ru/api/projects?populate=*')
        ])
        res.status(200).json({categorySites: responseCat.data, price: responsePrice.data, posts: responsePost.data, projects: responseProjects.data})
    } catch(error) {
        console.log(error);
    }
})

app.post('/sendform', async(req, res) => {
    const { name, phone } = req.body;
    console.log(name, phone)
    try {
        const response = await mailerTransport.sendMail({
            from: '"Webmarvels почта" <s.gorbachev@webmarvels.ru>',
            to: 's.gorbachev@webmarvels.ru',
            subject: 'Новая заявка с сайта',
            text: `Имя: ${name}
                    Телефон: ${phone}`
        })
        if (response) {
            res.status(200).json({message: 'Данные отправлены'})
        } else {
            res.status(400).json({message: 'Произошла ошибка при отправке'})
        }
    } catch(error) {
        console.log(error);
    }
})

server.listen(PORT, () => {
    console.log(`Сервер зпущен на порту ${PORT}`)
})
