const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', pageRoutes);

app.listen(3000, () => {
    console.log('Server Tugas 2 Aktif!');
});