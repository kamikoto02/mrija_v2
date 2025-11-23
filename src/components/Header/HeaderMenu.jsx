import React from 'react';
import styles from './Header.module.css';
import Logo from "../../images/header/Logo.png";
import close from '../../images/header/icon-btn.png'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HeaderMenu = ({closeMenu}) => {
    const { t } = useTranslation("header");
    return (
        <div className={styles.header_menu}>
            <div className={styles.header_menu_container}>
                <div className={styles.logo_container}>
                    <img src={Logo} alt="logo"/>
                </div>
                <button onClick={closeMenu}>
                    <img src={close} alt="close"/>
                </button>
            </div>
            <nav>
                <div className={styles.menu_nav_list}>
                    <button className={styles.menu_link}  onClick={closeMenu}>
                        <Link className={styles.li} to='/'>{t("home")}</Link>
                    </button>
                    <button className={styles.menu_link}  onClick={closeMenu}>
                        <Link className={styles.li} to='/about-us'>{t("about")}</Link>
                    </button>
                    <button className={styles.menu_link}  onClick={closeMenu}>
                        <Link className={styles.li} to='events'>{t("events")}</Link>
                    </button>
                    <button className={styles.menu_link}   onClick={closeMenu}>
                          {t("contact")}
                    </button>
                </div>
            </nav>
            <button className={styles.menu_join_btn}>
                Join Us
            </button>
        </div>
    );
};

export default HeaderMenu;