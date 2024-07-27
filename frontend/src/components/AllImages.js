import React, { useState, useEffect } from 'react';

const AllImages = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/images');
        if (!response.ok) {
          throw new Error('Veriler getirilirken hata oluştu');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Görseller</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image._id} className="border p-2 rounded">
            <img src={`http://localhost:5001/uploads/images/${image.filename}`} alt={image.filename} className="w-full h-auto" />
            <p className="mt-2 text-center">{image.filename}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllImages;