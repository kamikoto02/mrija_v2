import React from 'react';
import styles from './Courses.module.css';
import course from "./course";
import {useTranslation} from "react-i18next";

const Courses = () => {
    const { t } = useTranslation("courses");
    return (
        <div className={styles.wrapper}>
            <div className={styles.courses_container}>
                <p className='main-p'>{t("education")}</p>
                <h2 className={styles.title}>{t("title")}</h2>
                <p className={styles.subtitle}>{t("subtitle")}</p>
                <div className={styles.courses_content}>
                    {course.map((item, i) => <div className={styles.card} key={i}>
                        <div className={styles.image_wrapper}><img className={styles.image} src={item.image} alt=""/>
                        </div>
                        <div className={styles.header}>
                            <div className={styles.column}>
                                <p>{t(item.levels)}</p>
                                <p>{t(item.duration)}</p>
                            </div>
                            <p className={styles.students}>{t(item.students)}</p>
                        </div>
                        <div className={styles.row}>
                            <h2>{t(item.name)}</h2>
                            <p>{t(item.description)}</p>
                        </div>
                        <button className={styles.btn}>{t("enroll")}</button>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Courses;