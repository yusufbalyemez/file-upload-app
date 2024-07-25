const Image = require('../models/Image');

const uploadImage = async (req, res) => {
  try {
    const newImage = new Image({
      filename: req.file.filename,
    });
    await newImage.save();
    res.status(200).json({ message: 'Dosya başarıyla yüklendi ve veritabanına kaydedildi', file: req.file });
  } catch (error) {
    res.status(500).json({ message: 'Dosya yükleme veya veritabanına kaydetme hatası', error: error.message });
  }
};

module.exports = {
  uploadImage,
};