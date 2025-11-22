import React from 'react';
import styles from './Leadership.module.css';
import img1 from '../../../images/leadership/f6336f.png'
import img2 from '../../../images/leadership/882fe4.png'
import img3 from '../../../images/leadership/4f13c4.png'
import img4 from '../../../images/leadership/ff82f2e.png'


const Leadership = () => {
    return (
        <div className={styles.container}>
            <p className='main-p'>Meet The Team</p>
            <h2 className={styles.title}>Our Leadership</h2>
            <p className={styles.subtitle}>Dedicated volunteers working tirelessly to make
                Mrija Norway a welcoming home for our community
            </p>
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={img1} alt="image"/>
                    </div>
                    <div className={styles.card_info}>
                        <p className={styles.name}>Tetiana Bondarenko</p>
                        <p className={styles.position}>Community Director</p>
                        <p className={styles.description}>Leading the community with passion</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={img2} alt="image"/>
                    </div>
                    <div className={styles.card_info}>
                        <p className={styles.name}>Oleksandr Shevchenko</p>
                        <p className={styles.position}>Event Coordinator</p>
                        <p className={styles.description}>Organizing memorable experiences</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={img3} alt="image"/>
                    </div>
                    <div className={styles.card_info}>
                        <p className={styles.name}>Ludmila Kovalenko</p>
                        <p className={styles.position}>Education Lead</p>
                        <p className={styles.description}>Teaching and empowering others</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={img4} alt="image"/>
                    </div>
                    <div className={styles.card_info}>
                        <p className={styles.name}>Mykola Tkachuk</p>
                        <p className={styles.position}>Volunteer Manager</p>
                        <p className={styles.description}>Building bridges in the community</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;