import React from 'react';
import styles from './Hero.module.css';
import flower from '../../../images/hero/flower.png'
import image from '../../../images/hero/image.jpg'
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className={styles.hero_container}>
            <div className={styles.hero_content}>
                <div className={styles.banner}>
                    <img src={flower} alt="flower"/>
                    <span className={styles.title}>Welcome to <span style={{color: '#FECE00'}} > MriJa </span> Norway</span>
                </div>
                <h2 className={styles.subtitle}>
                    Helping Ukrainians integrate and thrive in Norway through community, education, and support
                </h2>
                <div className={styles.buttons}>
                    <button
                        onClick={() => {
                        const el = document.getElementById("membership");
                        el?.scrollIntoView({ behavior: "smooth" });
                         }}
                        className={styles.member_btn}>
                        Become a Member
                    </button>
                    <Link to='about-us'>
                        <button className={styles.learn_btn}>
                            Learn More
                        </button>
                    </Link>

                </div>
                <div className={styles.image_wrapper}>
                    <img className={styles.image} src={image} alt="image"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;