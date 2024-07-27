const express = require('express');
const upload = require('../config/multerConfig');
const { uploadImage, getAllImages, deleteImage, deleteImageNotPath } = require('../controllers/uploadController');

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/images',getAllImages);
router.delete('/images/:id', deleteImage); 
router.delete('/resimler/:id', deleteImageNotPath); 
module.exports = router;