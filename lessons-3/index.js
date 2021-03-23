const express = require('express');
require('dotenv').config()
const axios = require('axios');
const htmlparser2 = require("htmlparser2");
const yatr = axios.create({
    baseURL: 'https://translate.api.cloud.yandex.net/translate/v2',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.IAMTOKEN}`
    }
  });
const app = express();
const { config, engine } = require('express-edge');


config({ cache: process.env.NODE_ENV === 'production' });

app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(engine);
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/news', async(req, res) => {
    const {data} = await axios.get('https://habr.com/ru/rss/flows/develop/all/?fl=ru')

    const feed = htmlparser2.parseFeed(data);

    res.render('news',{news: feed.items});
});

app.get('/translate', async(req, res) => {

    console.log('GET');
    res.render('translate');
});
app.post('/translate', async(req, res) => {

    const result = await yatr.post('/translate',{
        "folder_id": process.env.FOLDER_ID,
        "texts": [req.body.text_one],
        "targetLanguageCode": "ru"
    })
    console.log(result.data);
    res.render('translate',{
        text_one: req.body.text_one,
        text_two: result.data.translations[0].text
    });
});

app.listen(32123);
