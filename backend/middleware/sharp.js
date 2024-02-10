const sharp = require("sharp");
const fs = require("fs");
const path = require('path');

module.exports = (req, res, next) => {
    const tailleLimiteOctets = 3000;

    if (req.file && req.file.size > tailleLimiteOctets * 1024) {
        console.log("Taille de l'image: " + req.file.size);
        console.log("Taille limite: " + tailleLimiteOctets * 1024);

        try {
            const imageOriginale = req.file.path;
            const width = 400;
            const height = 600;

            const extensionImage = path.extname(imageOriginale);
            const nomImage = path.basename(imageOriginale, extensionImage);
            const dossierImage = path.dirname(imageOriginale);
            const cheminImageResize = path.join(dossierImage, nomImage + "-resized" + extensionImage);

            console.log(imageOriginale, cheminImageResize);

            sharp(imageOriginale)
                .resize(width, height, { fit: "inside" })
                .jpeg({ quality: 80 })
                .toFile(cheminImageResize, (err) => {
                    if (err) {
                        return res.status(500).json({ message: "Erreur lors du redimensionnement de l'image" })
                    }
                    console.log("Image bien redimensionnée");

                    fs.unlink(imageOriginale, (err) => {
                        if (err) {
                            console.error("Erreur lors de la suppression de l'image d'origine:", err);
                        }
                        req.file.filename = nomImage + "-resized" + extensionImage;
                        next();
                    });
                });

        } catch (err) {
            res.status(500).json({ message: "Erreur lors du redimensionnement de l'image" })
            console.error("Erreur lors du redimensionnement de l'image:", err);
        }

    } else {
        next();
    }

};


