import React from 'react';
import styles from './Membership.module.css'
import individual from '../../../images/membership/individual.png';
import family from '../../../images/membership/family.png';
import organization from '../../../images/membership/organization.png';
import {useTranslation} from "react-i18next";

const Membership = () => {
    const { t } = useTranslation("membership");
    return (
        <section id='membership' className={styles.membership_wrapper}>
            <div className={styles.membership_container}>
                <p className='main-p'>{t("join")}</p>
                <h2 className={styles.title}>{t("title")}</h2>
                <p className={styles.subtitle}>{t("subtitle")}</p>
                <div className={styles.membership_content}>
                    <div className={styles.card}>
                        <img src={individual} alt="individual"/>
                        <p className={styles.name}>
                            {t("individual")}
                        </p>
                        <p className={styles.price_container}><span className={styles.price}>75 NOK</span>/{t("year")}</p>
                        <div>
                            <p className={styles.description}>
                                {t("individualDesc")}
                            </p>
                            <ul className={styles.list}>
                                <li>{t("accessEvents")}</li>
                                <li>{t("communitySupport")}</li>
                                <li>{t("newsletter")}</li>
                            </ul>
                            <button className={styles.btn}>{t("subscribe")}</button>
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.middle_card}`}>
                        <span className={styles.popular}>{t("popular")}</span>
                        <img src={family} alt="family"/>
                        <p className={styles.name}>
                            {t("family")}
                        </p>
                        <p className={styles.price_container}><span className={styles.price}>100 NOK</span>/{t("year")}</p>
                        <div>
                            <p className={styles.description}>
                                {t("familyDesc")}
                            </p>
                            <ul className={styles.list}>
                                <li>{t("benefits")}</li>
                                <li>{t("childrens")}</li>
                                <li>{t("discounts")}</li>
                                <li>{t("prioritySupport")}</li>
                            </ul>
                            <button className={styles.btn}>{t("subscribe")}</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={organization} alt="organization"/>
                        <p className={styles.name}>
                            {t("organization")}
                        </p>
                        <p className={styles.contact}>{t("contact")}</p>
                        <div>
                            <p className={styles.description}>
                                {t("contactDesc")}
                            </p>
                            <ul className={styles.list}>
                                <li>{t("partnership")}</li>
                                <li>{t("sponsor")}</li>
                                <li>{t("volunteer")}</li>
                            </ul>
                            <button className={styles.btn}>{t("contactUs")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;