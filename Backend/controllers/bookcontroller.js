const books = require('../models/bookmodels');
const mongoose = require('mongoose');

const BookController = {
    async create(req, res) {
        const { title, author, publisheddate, description } = req.body;
        const image = req.file.filename;

        const findbook = await books.findOne({ where: { title: title } });
        if (findbook)
            res.send({ "status": "error", "message": "Book Already Available" });
        const createbook = new books({
            title: title,
            author: author,
            description: description,
            image: image,
            publisheddate: publisheddate
        });
        await createbook.save();
        res.send({ "status": "success", "message": "Book Added Successfully" });
    },
    async update(req, res) {
        const bookID = req.params.id;
        const { title, author, publisheddate, description } = req.body;
        const image = req.file.filename;

        const update = await books.findOne({ _id: bookID });
        if (title) {
            update.title = title;
        }

        if (author) {
            update.author = author;
        }

        if (publisheddate) {
            update.publisheddate = publisheddate;
        }

        if (image) {
            update.image = image;
        }

        if (description) {
            update.description = description;
        }

        await update.save();
        res.send({ "status": "success", "message": "Book Updated Successfully", "data": update });
    },
    async readall(req, res) {
        try {
            const all = await books.find();
            res.send(all);
        } catch (error) {
            console.error('Error fetching books:', error);
            res.status(500).send({ message: 'Error fetching books', error });
        }
    },
    async read(req, res) {
        const bookID = new mongoose.Types.ObjectId(req.params.id);
        const read = await books.findOne({ _id: bookID });
        res.send(read);
    },
    async delete(req, res) {
        const bookID = new mongoose.Types.ObjectId(req.params.id);
        const remove = await books.deleteOne({ _id: bookID });
        res.send({ "status": "success", "message": "Book Deleted succcessfully", "data": remove });
    }
}

module.exports = BookController;