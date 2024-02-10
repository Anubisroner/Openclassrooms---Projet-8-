const multer = require("multer");

const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png"
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images")
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join("_");
        const extension = MIME_TYPES[file.mimetype];
        if (!extension) {
            return res.status(500).json({ message: "Le format du fichier sélectionné n'est pas valide !" })
        }
        callback(null, name + Date.now() + "." + extension)
    }
});

module.exports = multer({ storage }).single("image");