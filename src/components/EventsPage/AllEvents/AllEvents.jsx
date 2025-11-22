import React from 'react';
import styles from './AllEvents.module.css'
import eventsArray from "../../HomePage/Events/eventsArray";

const AllEvents = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p className='main-p'>Coming Soon</p>
                <h2 className={styles.title}>All Upcoming Events</h2>
                <p className={styles.subtitle}>Browse and register for upcoming community events</p>
                <div className={styles.content}>
                    {eventsArray.map((event, index) => <div className={styles.card}>
                        <div className={styles.image_wrapper}>
                            <img src={event.image} alt="image"/>
                        </div>
                        <div className={styles.card_content}>
                            <div className={styles.duration}>
                                <span className={styles.date}>{event.day}</span>
                                <span className={styles.time}>{event.time}</span>
                            </div>
                            <h3 className={styles.name}>{event.name}</h3>
                            <p className={styles.description}>
                                {event.description}
                            </p>
                            <button>Register Now</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default AllEvents;