import React from 'react';
import styles from './Support.module.css'
import mentor from '../../../images/support/mentor.png'
import house from '../../../images/support/house.png'
import job from '../../../images/support/job.png'
import help from '../../../images/support/help.png'
import image from "../../../images/support/image.jpg";

const Support = () => {
    return (
        <section className={styles.support_wrapper}>
            <div className={styles.support_container}>
                <p className='main-p'>We're Here For You</p>
                <h2 className={styles.title}>Community Support</h2>
                <p className={styles.subtitle}>Comprehensive support for your integration journey</p>
                <div className={styles.support_content}>
                    <div className={styles.card}>
                        <img src={mentor} alt="mentor"/>
                        <h2 className={styles.card_title}>Mentorship Program</h2>
                        <p className={styles.card_desc}>
                            Connect with experienced community members who can
                            guide you through integration challenges, job search, and everyday life in Norway.
                        </p>
                        <p className={styles.card_link}><a href="#">Find a Mentor →</a></p>
                    </div>
                    <div className={styles.card}>
                        <img src={house} alt="house"/>
                        <h2 className={styles.card_title}>Housing Assistance</h2>
                        <p className={styles.card_desc}>
                            Guidance on finding accommodation, understanding rental contracts, tenant rights,
                            and connecting with other community members looking for housing.
                        </p>
                        <p className={styles.card_link}><a href="#">Learn More →</a></p>
                    </div>
                    <div className={styles.card}>
                        <img src={job} alt="job"/>
                        <h2 className={styles.card_title}>Job Market Support</h2>
                        <p className={styles.card_desc}>
                            Resume workshops, interview preparation, networking events,
                            and connections to employers looking for skilled Ukrainian professionals.
                        </p>
                        <p className={styles.card_link}><a href="#">Explore Opportunities →</a></p>
                    </div>
                    <div className={styles.card}>
                        <img src={help} alt="help"/>
                        <h2 className={styles.card_title}>Legal & Administrative Help</h2>
                        <p className={styles.card_desc}>
                            Get assistance with residence permits, work permits, tax cards,
                            and navigating Norwegian bureaucracy with our volunteer advisors.
                        </p>
                        <p className={styles.card_link}><a href="#">Get Help →</a></p>
                    </div>
                </div>
                <div className={styles.image_wrapper}>
                    <img className={styles.image} src={image} alt="image"/>
                </div>
            </div>
        </section>
    );
};

export default Support;