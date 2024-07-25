const multer = require('multer');
const path = require('path');
const { generateUniqueFilename, validateFileType } = require('../utils/fileUtils');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/images/');
  },
  filename: (req, file, cb) => {
    const uniqueFilename = generateUniqueFilename(file.originalname);
    cb(null, uniqueFilename);
  },
});

const fileFilter = (req, file, cb) => {
  if (!validateFileType(file)) {
    return cb(new Error('Yalnızca görüntü dosyaları yüklenebilir'), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB sınırı
  fileFilter: fileFilter,
});

module.exports = upload;