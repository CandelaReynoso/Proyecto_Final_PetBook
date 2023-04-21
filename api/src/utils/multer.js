

const multer = require("multer");

const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);

    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(
        new Error(
          "El Formato de archivo de la imagen no esta soportado,tiene que subir una imagen con extension Jpg,Jpeg o png"
        ),
        false
      );
      return;
    }
    cb(null, true);
  },
});
