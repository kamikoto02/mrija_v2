import React from 'react';
import styles from './Gallery.module.css';
import pic1 from '../../../images/gallery/8ca31.jpg'
import pic2 from '../../../images/gallery/8eb5b4.jpg'
import pic3 from '../../../images/gallery/042e4.jpg'
import pic4 from '../../../images/gallery/035ae2.jpg'
import pic5 from '../../../images/gallery/ece8ef.jpg'
import pic6 from '../../../images/gallery/f41b16.jpg'
import pic7 from '../../../images/gallery/f9e38f.jpg'
import pic8 from '../../../images/gallery/6d126.jpg'

const Gallery = () => {
    return (
        <div className={styles.container}>
            <p className='main-p'>Our Moments</p>
            <h2 className={styles.title}>Community Gallery</h2>
            <p className={styles.subtitle}>
                Explore the vibrant moments of our Ukrainian community in Norway.
                From cultural celebrations to educational programs,
                these images capture our journey of integration and connection.
            </p>
            <div className={styles.gallery_content}>
                <div className={styles.image_wrapper}>
                    <img src={pic1} alt="image"/>
                </div>
                <div className={styles.image_wrapper}>
                    <img src={pic2} alt="image"/>
                </div>
                <div className={styles.image_wrapper}>
                    <img src={pic3} alt="image"/>
                </div>
                <div className={styles.image_wrapper}>
                    <img src={pic4} alt="image"/>
                </div>
                <div className={styles.image_wrapper}>
                    <img src={pic5} alt="image"/>
                </div>
                <div className={styles.image_wrapper}>
                    <img src={pic6} alt="image"/>
                </div>
                <div className={styles.image_wrapper}>
                    <img src={pic7} alt="image"/>
                </div>
                <div className={styles.image_wrapper}>
                    <img src={pic8} alt="image"/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;