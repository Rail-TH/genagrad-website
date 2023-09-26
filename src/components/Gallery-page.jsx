import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import img1 from '../assets/img/image1.webp';
import img2 from '../assets/img/image2.webp';
import img3 from '../assets/img/image3.webp';
import img4 from '../assets/img/image4.webp';
import img5 from '../assets/img/image5.webp';
import img6 from '../assets/img/image6.webp';
import img7 from '../assets/img/image7.webp';
import img8 from '../assets/img/image8.webp';
import img9 from '../assets/img/image9.webp';

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="В галерее Генаграда самые лучшие виды на город!" />
      </Helmet>
      <section className="galleryContent">
        <div className="galleryRow">
          <motion.img
            src={img1}
            alt="minecraftCityScreenshot"
            onClick={() => openImage(img1)}
            whileTap={{ scale: 0.95 }}
            loading="lazy"
          />
          <motion.img
            src={img2}
            alt="minecraftCityScreenshot"
            onClick={() => openImage(img2)}
            whileTap={{ scale: 0.95 }}
            loading="lazy"
          />
          <motion.img
            src={img3}
            alt="minecraftCityScreenshot"
            onClick={() => openImage(img3)}
            whileTap={{ scale: 0.95 }}
            loading="lazy"
          />
          <motion.img
            src={img4}
            alt="minecraftCityScreenshot"
            onClick={() => openImage(img4)}
            whileTap={{ scale: 0.95 }}
            loading="lazy"
          />
          <motion.img
            src={img5}
            alt="minecraftCityScreenshot"
            onClick={() => openImage(img5)}
            whileTap={{ scale: 0.95 }}
            loading="lazy"
          />
          <motion.img
            src={img6}
            alt="minecraftCityScreenshot"
            onClick={() => openImage(img6)}
            whileTap={{ scale: 0.95 }}
            loading="lazy"
          />
          <motion.img
            src={img7}
            alt="minecraftCityScreenshot"
            onClick={() => openImage(img7)}
            whileTap={{ scale: 0.95 }}
            loading="lazy"
          />
          <motion.img
            src={img8}
            alt="minecraftCityScreenshot"
            onClick={() => openImage(img8)}
            whileTap={{ scale: 0.95 }}
            loading="lazy"
          />
          <motion.img
            src={img9}
            alt="minecraftCityScreenshot"
            onClick={() => openImage(img9)}
            whileTap={{ scale: 0.95 }}
            loading="lazy"
          />
        </div>
        <div className="galleryRow"></div>
        <div className="galleryRow"></div>
      </section>

      {selectedImage && (
        <motion.div
          className="fullscreenImage"
          onClick={closeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={selectedImage}
            alt="fullscreenImage"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
          />
        </motion.div>
      )}
    </>
  );
}

export default GalleryPage;