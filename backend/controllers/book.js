const Book = require("../models/book");
const fs = require("fs");


// fonction pour ajouter un livre
exports.createBook = (req, res, next) => {
    const bookObject = JSON.parse(req.body.book);
    delete bookObject._id;
    delete bookObject._userId;
    const book = new Book({
        ...bookObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    });

    book.save()
        .then(() => { res.status(201).json({ message: "Livre enregistré !" }) })
        .catch(error => { res.status(400).json({ error }) })
};

// fonction pour afficher tous les livres
exports.getAllBook = (req, res, next) => {
    Book.find()
        .then(books => res.status(200).json(books))
        .catch(error => res.status(400).json({ error }));
};

// fonction pour afficher le livres que l'on souhaite
exports.getOneBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
        .then(book => res.status(200).json(book))
        .catch(error => res.status(404).json({ error }));
};

// fonction qui affiche les 3 meilleurs livres
exports.getBestRating = (req, res, next) => {
    Book.find()
        .sort({ averageRating: -1 })
        .limit(3)
        .then(books => res.status(200).json(books))
        .catch(error => res.status(400).json({ error }));
};

// fonction pour modifier un livre
exports.modifyBook = (req, res, next) => {
    const bookObject = req.file ? {
        ...JSON.parse(req.body.book),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    } : { ...req.body };

    delete bookObject._userId;
    Book.findOne({ _id: req.params.id })
        .then((book) => {
            if (book.userId != req.auth.userId) {
                res.status(401).json({ message: "Non Autorisé !" })
            } else {
                Book.updateOne({ _id: req.params.id }, { ...bookObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: "Livre modifié" }))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
};

// Fonction pour supprimer un livre
exports.deleteBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
        .then(book => {
            if (book.userId != req.auth.userId) {
                res.status(401).json({ message: "Non autorisé !" });
            } else {
                const filename = book.imageUrl.split("/images/")[1];
                fs.unlink(`images/${filename}`, () => {
                    Book.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: "Livre supprimé !" }) })
                        .catch(error => res.status(401).json({ error }));
                })
            }
        })
        .catch(error => res.status(500).json({ error }));
};

// Fonction pour noter un livre
exports.rateBook = async (req, res, next) => {
    const bookId = req.params.id;
    const userId = req.body.userId;
    const rating = req.body.rating;

    const calculateAverageRating = (ratings) => {
        const sumOfRatings = ratings.reduce((total, rating) => total + rating.grade, 0);
        return sumOfRatings / ratings.length;
    };

    Book.findOne({ _id: bookId }).exec()
        .then(book => {
            if (!book) {
                throw new Error("Livre introuvable");
            }

            if (book.ratings.some(rating => rating.userId === userId)) {
                return res.status(401).json({ message: "Vous avez déjà voté" });
            }

            book.ratings.push({
                userId: userId,
                grade: rating
            });

            book.averageRating = calculateAverageRating(book.ratings);

            return book.save();
        })
        .then(savedBook => {
            res.status(201).json(savedBook);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};
