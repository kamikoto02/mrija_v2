import React from 'react';
import styles from './Mission.module.css';

const Mission = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p className='main-p'>What Drives Us</p>
                <h2 className={styles.title}>Our Mission</h2>
                <p className={styles.subtitle}>Empowering Ukrainians in Norway to thrive through community, culture, and connection</p>
                <div className={styles.mission_content}>
                    <div className={styles.card}>
                        <h2>01</h2>
                        <h3>Inspire</h3>
                        <p>We inspire Ukrainians in Norway to embrace
                            their heritage while building a new life, fostering confidence and cultural pride.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>02</h2>
                        <h3>Support</h3>
                        <p>From language learning to legal guidance, we
                            provide comprehensive support for every step of the integration journey.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>03</h2>
                        <h3>Connect</h3>
                        <p>We create meaningful connections between
                            Ukrainian families, Norwegian communities, and professional networks.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>04</h2>
                        <h3>Shape the Future</h3>
                        <p>Through education and mentorship, we prepare Ukrainian
                            families to thrive and contribute to Norwegian society.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;