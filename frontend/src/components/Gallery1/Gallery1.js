import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from 'react-modal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

Modal.setAppElement('#root'); // Modal için root elementini belirleyin

const Gallery1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/images');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={10} // Slaytlar arasındaki boşluğu azaltmak için
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image._id}>
            <img
              src={`http://localhost:5001/uploads/images/${image.filename}`}
              alt={image.filename}
              onClick={() => openModal(`http://localhost:5001/uploads/images/${image.filename}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className='absolute right-1 top-1'>
          <button onClick={closeModal} className='px-3 py-1 bg-gray-600 rounded-full text-white mb-1'>X</button>
        </div>
        <img src={selectedImage} alt="Selected" className="modal-image" />
      </Modal>
    </>
  );
}

export default Gallery1;