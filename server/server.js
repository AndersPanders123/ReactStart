import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('ahhh')
})

app.get('/login', (req, res) => {
    res.send('logged inn')
})

app.listen(3000, () => console.log('snhag'))