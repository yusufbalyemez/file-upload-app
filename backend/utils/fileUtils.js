const { v4: uuidv4 } = require('uuid');
const path = require('path');

/**
 * Benzersiz dosya adı oluşturur
 * @param {string} originalname - Orijinal dosya adı
 * @returns {string} - Benzersiz dosya adı
 */
const generateUniqueFilename = (originalname) => {
  const uniqueSuffix = `${uuidv4()}${path.extname(originalname)}`;
  return uniqueSuffix;
};

/**
 * Dosya türünü doğrular
 * @param {object} file - Dosya nesnesi
 * @returns {boolean} - Doğrulama sonucu
 */
const validateFileType = (file) => {
  return file.mimetype.startsWith('image/');
};

module.exports = {
  generateUniqueFilename,
  validateFileType,
};