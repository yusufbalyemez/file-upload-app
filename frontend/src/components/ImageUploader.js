import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Yalnızca görüntü dosyaları yüklenebilir.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB sınırı
        setError('Dosya boyutu 5MB\'dan küçük olmalıdır.');
        return;
      }
      Resizer.imageFileResizer(
        file,
        300,
        300,
        'JPEG',
        100,
        0,
        (uri) => {
          setPreview(uri);
        },
        'base64'
      );
      setImage(file);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError('Lütfen bir dosya seçin.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', image);
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Dosya yükleme hatası');
      }
      const data = await response.json();
      console.log('Yükleme başarılı:', data);
    } catch (error) {
      setError('Dosya yükleme başarısız oldu.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Görsel Yükle</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        {preview && (
          <div className="mb-4">
            <img src={preview} alt="Preview" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Yükle
        </button>
      </form>
    </div>
  );
};

export default ImageUploader;