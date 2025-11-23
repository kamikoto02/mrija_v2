import React from 'react';
import styles from './ReachOut.module.css';
import {useTranslation} from "react-i18next";

const ReachOut = () => {
    const { t } = useTranslation("reachOut");
    return (
        <div  className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.row}>
                        <p className={styles.p}>{t("wantToHost")}</p>
                        <h2 className={styles.title}>{t("title")}</h2>
                        <p className={styles.subtitle}>{t("subtitle")}</p>
                    </div>
                    <div id='contact' className={styles.form}>
                        <input type="text" placeholder={t("name")}/>
                        <input type="text" placeholder={t("email")}/>
                        <textarea placeholder={t("message")}></textarea>
                        <button>{t("send")}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReachOut;