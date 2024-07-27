const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function connect() {
    try {
        const url = process.env.MONGOURL;
        mongoose.connect(url);
        console.log("connected")
    } catch (err) {
        console.log("connection:", err);
    }
}

connect();


const bookschema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisheddate: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Books', bookschema);

module.exports = Book;