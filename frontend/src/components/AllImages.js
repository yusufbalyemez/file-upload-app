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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/images/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Resim silinirken hata oluştu');
      }
      setImages(images.filter(image => image._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Görseller</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image._id} className="border p-2 rounded relative">
            <img src={`http://localhost:5001/uploads/images/${image.filename}`} alt={image.filename} className="w-full h-auto" />
            <button
              onClick={() => handleDelete(image._id)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full py-1 px-3"
            >
              ×
            </button>
            <p className="mt-2 text-center">{image.filename}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllImages;