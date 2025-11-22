import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
    return (
        <section className={styles.newsletter_wrapper}>
            <div className={styles.newsletter_container}>
                <h2>Stay updated with our newsletter</h2>
                <div className={styles.form}>
                    <div className={styles.input_wrapper}><input type="text" placeholder="Enter your Email"/></div>
                    <button>Subscribe</button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;