const express = require ('express');

//Express object
const app = express();

const path = require('path');

//routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
})

const PORT = process.env.PORT || 5000;

//Console 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));