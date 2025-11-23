import React from 'react';
import styles from './FeaturedEvent.module.css'
import event from './event.jpg'
import {useTranslation} from "react-i18next";

const FeaturedEvent = () => {
    const { t } = useTranslation("featuredEvent");
    return (
        <div className={styles.container}>
            <p className='main-p'>{t("dontMiss")}</p>
            <h2 className={styles.title}>{t("title")}</h2>
            <div className={styles.card}>
                <div className={styles.image_wrapper}>
                    <img src={event} alt="image"/>
                </div>
                <div className={styles.card_content}>
                    <div className={styles.properties}>
                        <span className={styles.students}>{t("students")}</span>
                        <span className={styles.free}>{t("price")}</span>
                    </div>
                    <div className={styles.duration}>
                        <span className={styles.date}>{t("day")}</span>
                        <span className={styles.time}>{t("time")}</span>
                    </div>
                    <h3 className={styles.name}>{t("name")}</h3>
                    <p className={styles.description}>{t("description")}</p>
                    <button>{t("button")}</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedEvent;