import React from 'react';
import styles from './Courses.module.css';
import course from "./course";

const Courses = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.courses_container}>
                <p className='main-p'>Education & Integration</p>
                <h2 className={styles.title}>Our Courses</h2>
                <p className={styles.subtitle}>Learn, grow, and integrate into Norwegian society</p>
                <div className={styles.courses_content}>
                    {course.map((item, i) => <div className={styles.card} key={i}>
                        <div className={styles.image_wrapper}><img className={styles.image} src={item.image} alt=""/>
                        </div>
                        <div className={styles.header}>
                            <div className={styles.column}>
                                <p>{item.levels}</p>
                                <p>{item.duration}</p>
                            </div>
                            <p className={styles.students}>{item.students}</p>
                        </div>
                        <div className={styles.row}>
                            <h2>{item.name}</h2>
                            <p>{item.subtitle}</p>
                        </div>
                        <button className={styles.btn}>Enroll Now →</button>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Courses;