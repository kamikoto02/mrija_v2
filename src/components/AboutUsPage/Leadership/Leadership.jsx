import React from 'react';
import styles from './Leadership.module.css';
import img1 from '../../../images/leadership/f6336f.png'
import img2 from '../../../images/leadership/882fe4.png'
import img3 from '../../../images/leadership/4f13c4.png'
import img4 from '../../../images/leadership/ff82f2e.png'
import {useTranslation} from "react-i18next";


const Leadership = () => {
    const { t } = useTranslation("leadership");
    return (
        <div className={styles.container}>
            <p className='main-p'>{t("meetTheTeam")}</p>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.subtitle}>{t("subtitle")}</p>
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={img1} alt="image"/>
                    </div>
                    <div className={styles.card_info}>
                        <p className={styles.name}>{t("tetiana")}</p>
                        <p className={styles.position}>{t("director")}</p>
                        <p className={styles.description}>{t("directorDesc")}</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={img2} alt="image"/>
                    </div>
                    <div className={styles.card_info}>
                        <p className={styles.name}>{t("oleksandr")}</p>
                        <p className={styles.position}>{t("coordinator")}</p>
                        <p className={styles.description}>{t("coordinatorDesc")}</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={img3} alt="image"/>
                    </div>
                    <div className={styles.card_info}>
                        <p className={styles.name}>{t("ludmila")}</p>
                        <p className={styles.position}>{t("lead")}</p>
                        <p className={styles.description}>{t("leadDesc")}</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_wrapper}>
                        <img src={img4} alt="image"/>
                    </div>
                    <div className={styles.card_info}>
                        <p className={styles.name}>{t("mykola")}</p>
                        <p className={styles.position}>{t("manager")}</p>
                        <p className={styles.description}>{t("managerDesc")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;