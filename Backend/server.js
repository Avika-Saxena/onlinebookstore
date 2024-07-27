const express = require('express');
const cors = require('cors');
const path = require('path');
const cookie_parser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookstoremodel = require('./models/bookmodels');
const book = require('./controllers/bookcontroller');
const multer = require('multer');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../Frontend/online-bookstore/build')));
app.use(cookie_parser())

const storage = multer.diskStorage({
    destination: function(req, File, cb) {
        cb(null, '../Frontend/online-bookstore/src/uploads/')
    },
    filename: function(req, File, cb) {
        const uniquename = Date.now() + '-' + File.originalname;
        cb(null, uniquename)
    }
});
const upload = multer({ storage: storage })
app.use('/uploads', express.static(path.join(__dirname, '../Frontend/online-bookstore/src/uploads')));

const PORT = 5000 || process.env.PORT;
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Frontend/online-bookstore/build', 'index.html'));
})
app.post('/create', upload.single("image"), book.create);
app.post('/update/:id', upload.single("image"), book.update);
app.post('/delete/:id', book.delete);
app.post('/readall', book.readall);
app.post(`/read/:id`, book.read);

app.listen(PORT, () => {
    console.log("Server started");
})