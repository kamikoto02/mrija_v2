import React, {useRef, useState} from 'react';
import styles from './Registration.module.css';
import close from './Close_MD.png'
import {useTranslation} from "react-i18next";

const Registration = ({selectedEventName, onClose, onSuccesOpen}) => {
    const iframeRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {t} = useTranslation('register');


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        e.target.submit();
        e.target.reset();
        onClose()
        onSuccesOpen()
    };

    const handleIframeLoad = () => {
        if (isSubmitting) {
            setIsSubmitting(false);
        }
    };
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{t("title")} <span className={styles.name}>{selectedEventName}</span> </h3>
            <button onClick={onClose} className={styles.close}><img className={styles.close} src={close} alt=""/></button>
            <p className={styles.desc}>{t("desc")} <a href="">{t("active")}</a> </p>
            <form className={styles.form}
                  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScXLP6ZTgUkpgUjH81ujvFqzWCWx2kXJhbh3X9Bg1Qf4jZeKQ/formResponse"
                  method="POST" target="hidden_iframe" onSubmit={handleSubmit}>
                <label>
                    <p>{t("name")}</p>
                    <input type="text" name="entry.524126650" placeholder='Enter name' required/>

                </label>
                <label>
                    <p>{t("surname")}</p>
                    <input type="text" name="entry.181395569" placeholder='Enter surname' required/>
                </label>
                <label>
                    <p>{t("phone")}</p>
                    <input type="tel" name="entry.675187710" pattern=".{8,}" placeholder='(+47) xxx-xx-xxx' title={t('notCorrectPhone')} required/>
                </label>
                <input style={{display: "none"}} name="entry.195333573" value={selectedEventName} type="text" />
                <div className={styles.btn_container}>
                    <button type="submit">{t("register")}</button>
                </div>
                <iframe
                    name="hidden_iframe"
                    ref={iframeRef}
                    style={{display: "none"}}
                    title="hidden_iframe"
                    onLoad={handleIframeLoad}
                ></iframe>
            </form>
        </div>
    );
};

export default Registration;