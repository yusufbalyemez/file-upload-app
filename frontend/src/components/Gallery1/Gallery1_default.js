import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from 'react-modal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'

Modal.setAppElement('#root'); // Modal için root elementini belirleyin

const Gallery1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

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
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='slider1' onClick={() => openModal("https://swiperjs.com/demos/images/nature-1.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='slider2' onClick={() => openModal("https://swiperjs.com/demos/images/nature-2.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='slider3' onClick={() => openModal("https://swiperjs.com/demos/images/nature-3.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='slider4' onClick={() => openModal("https://swiperjs.com/demos/images/nature-4.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='slider5' onClick={() => openModal("https://swiperjs.com/demos/images/nature-5.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt='slider6' onClick={() => openModal("https://swiperjs.com/demos/images/nature-6.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt='slider7' onClick={() => openModal("https://swiperjs.com/demos/images/nature-7.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt='slider8' onClick={() => openModal("https://swiperjs.com/demos/images/nature-8.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt='slider9' onClick={() => openModal("https://swiperjs.com/demos/images/nature-9.jpg")} />
        </SwiperSlide>
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