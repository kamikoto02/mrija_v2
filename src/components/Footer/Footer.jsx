import React from 'react';
import styles from './Footer.module.css'
import logo from './Logo.png'
import instagram from '../../images/footer/instagram.svg'
import facebook from '../../images/footer/facebook.svg'

const Footer = () => {
    return (
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer_container}>
                <div className={styles.footer_content}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                    <div className={styles.footer_contact}>
                        <div className={styles.contact_row}>
                            <h3 className={styles.address}>Address</h3>
                            <p>Storgata 15</p>
                            <p>Oslo, Norway, 0155</p>
                        </div>
                        <div className={styles.contact_row}>
                            <h3 className={styles.email}>Email</h3>
                            <p>info@mriJa-norway.no</p>
                            <p>contact@mriJa-norway.no</p>
                        </div>
                        <div className={styles.contact_row}>
                            <h3 className={styles.phone}>Phone</h3>
                            <p>+47 123 45 678</p>
                            <p>+47 987 65 432</p>
                        </div>
                        <div className={styles.contact_row}>
                            <h3 >Social Media</h3>
                            <div className={styles.socials}>
                                <a href="#"><img className={styles.instagram} src={instagram} alt="instagram"/></a>
                                <a href='#'><img className={styles.facebook} src={facebook} alt="facebook"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_bottom}>
                    <p className={styles.rights}>© 2025 MriJa. All rights reserved </p>
                    <nav className={styles.footer_nav}>
                        <li>Home</li>
                        <li className={styles.li_about}>About Us</li>
                        <li className={styles.li_events}>Events</li>
                        <li>Contact</li>
                    </nav>
                    <div className={styles.footer_policy}>
                        <a className={styles.terms}>Terms of Service</a>
                        <a>Privacy Policy</a>
                    </div>
                    <p className={styles.mobile_rights}>© 2025 MriJa. All rights reserved </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;