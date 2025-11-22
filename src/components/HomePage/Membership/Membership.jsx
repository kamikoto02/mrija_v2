import React from 'react';
import styles from './Membership.module.css'
import individual from '../../../images/membership/individual.png';
import family from '../../../images/membership/family.png';
import organization from '../../../images/membership/organization.png';

const Membership = () => {
    return (
        <section id='membership' className={styles.membership_wrapper}>
            <div className={styles.membership_container}>
                <p className='main-p'>Join Our Community</p>
                <h2 className={styles.title}>Membership</h2>
                <p className={styles.subtitle}>Become part of our growing Ukrainian community in Norway</p>
                <div className={styles.membership_content}>
                    <div className={styles.card}>
                        <img src={individual} alt="individual"/>
                        <p className={styles.name}>
                            Individual
                        </p>
                        <p className={styles.price_container}><span className={styles.price}>75 NOK</span>/year</p>
                        <div>
                            <p className={styles.description}>
                                Perfect for individuals looking to connect and integrate
                            </p>
                            <ul className={styles.list}>
                                <li>Access to all events</li>
                                <li>Community support</li>
                                <li>Newsletter updates</li>
                            </ul>
                            <button className={styles.btn}>Subscribe now</button>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.middle_card}`}>
                        <span className={styles.popular}>Popular</span>
                        <img src={family} alt="family"/>
                        <p className={styles.name}>
                            Family
                        </p>
                        <p className={styles.price_container}><span className={styles.price}>100 NOK</span>/year</p>
                        <div>
                            <p className={styles.description}>
                                Best for families looking to stay connected
                            </p>
                            <ul className={styles.list}>
                                <li>All individual benefits</li>
                                <li>Children's programs</li>
                                <li>Family event discounts</li>
                                <li>Priority support</li>
                            </ul>
                            <button className={styles.btn}>Subscribe now</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={organization} alt="organization"/>
                        <p className={styles.name}>
                            Organization
                        </p>
                        <p className={styles.contact}>Contact</p>
                        <div>
                            <p className={styles.description}>
                                For businesses and organizations wanting to support
                            </p>
                            <ul className={styles.list}>
                                <li>Custom partnership</li>
                                <li>Sponsor events</li>
                                <li>Volunteer opportunities</li>
                            </ul>
                            <button className={styles.btn}>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;