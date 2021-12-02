import data from './data.js';
import express from 'express'
const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
})
app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 3001;
app.listen(3001, () => {
    console.log(` Serve at http://localhost:${port}`);
})