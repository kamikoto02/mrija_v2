import React from 'react';
import styles from './Newsletter.module.css';
import {useTranslation} from "react-i18next";

const Newsletter = () => {
    const { t } = useTranslation("newsletter");
    return (
        <section className={styles.newsletter_wrapper}>
            <div className={styles.newsletter_container}>
                <h2>{t("stay")}</h2>
                <div className={styles.form}>
                    <div className={styles.input_wrapper}><input type="text" placeholder={t("enter")}/></div>
                    <button>{t("subscribe")}</button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;