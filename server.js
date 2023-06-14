const app = require('express')();
const port = 4001
const countries = require('./countries')

app.get('/', (req, res) => {
    res.json(countries)
})

app.get('/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    res.json(countries[randomIndex])
})

app.listen(port, () => console.log('listening on port ' + port));