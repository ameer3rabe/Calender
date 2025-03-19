const express = require('express');
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'SSR with Node.js' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

