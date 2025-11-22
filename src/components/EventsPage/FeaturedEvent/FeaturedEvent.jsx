import React from 'react';
import styles from './FeaturedEvent.module.css'
import event from './event.jpg'

const FeaturedEvent = () => {
    return (
        <div className={styles.container}>
            <p className='main-p'>Don't Miss</p>
            <h2 className={styles.title}>Featured Event</h2>
            <div className={styles.card}>
                <div className={styles.image_wrapper}>
                    <img src={event} alt="image"/>
                </div>
                <div className={styles.card_content}>
                    <div className={styles.properties}>
                        <span className={styles.students}>85+ students</span>
                        <span className={styles.free}>Free</span>
                    </div>
                    <div className={styles.duration}>
                        <span className={styles.date}>August 24, 2025</span>
                        <span className={styles.time}>18:00 - 21:00</span>
                    </div>
                    <h3 className={styles.name}>Ukrainian Independence Day Celebration</h3>
                    <p className={styles.description}>Join us for a grand celebration of Ukrainian Independence Day
                        with traditional music, dance performances, food stalls, children's activities, and more!
                    </p>
                    <button>Register Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedEvent;