const Image = require("../models/Image");
const fs = require("fs");
const path = require("path");

exports.uploadImage = async (req, res) => {
  try {
    const newImage = new Image({
      filename: req.file.filename,
    });
    await newImage.save();
    res.status(200).json({
      message: "Dosya başarıyla yüklendi ve veritabanına kaydedildi",
      file: req.file,
    });
  } catch (error) {
    res.status(500).json({
      message: "Dosya yükleme veya veritabanına kaydetme hatası",
      error: error.message,
    });
  }
};

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Görüntüleri alma hatası", error: error.message });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Görüntü bulunamadı" });
    }

    // Dosya sisteminden görüntüyü silme
    const imagePath = path.join(__dirname, "../uploads/images", image.filename);
    fs.unlink(imagePath, (err) => {
      if (err) {
        return res
          .status(500)
          .json({
            message: "Dosya silinirken hata oluştu",
            error: err.message,
          });
      }
    });

    await Image.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Görüntü başarıyla silindi" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Görüntü silinirken hata oluştu",
        error: error.message,
      });
  }
};

exports.deleteImageNotPath = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Görüntü bulunamadı" });
    }

    await Image.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Görüntü başarıyla silindi" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Görüntü silinirken hata oluştu",
        error: error.message,
      });
  }
};
