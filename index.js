const express = require('express');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose')
const Words = require('./words.js')
const dotenv = require('dotenv')
dotenv.config()


mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.sxxlc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
 .then(() => {
    console.log('connected')
 })
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const words = await Words.find()
    res.render('index', {words});
});

app.post('/add', async (req, res) => {
    const {word, definition} = req.body
    const newWord = new Words({
        word,
        definition,
    });
    await newWord.save()
    .then(() => {
        res.redirect('/')
    })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
