import React from 'react';
import styles from './ReachOut.module.css';

const ReachOut = () => {
    return (
        <div  className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.row}>
                        <p className={styles.p}>Want to Host an Event?</p>
                        <h2 className={styles.title}>Reach out</h2>
                        <p className={styles.subtitle}>
                            Do you have an idea for a community event?
                            We'd love to hear from you! Contact us to discuss hosting your own event.
                        </p>
                    </div>
                    <div id='contact' className={styles.form}>
                        <input type="text" placeholder='Name'/>
                        <input type="text" placeholder='Email'/>
                        <textarea placeholder="Message"></textarea>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReachOut;