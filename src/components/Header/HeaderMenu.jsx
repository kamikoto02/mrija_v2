import React from 'react';
import styles from './Header.module.css';
import Logo from "../../images/header/Logo.png";
import close from '../../images/header/icon-btn.png'
import {Link} from "react-router-dom";

const HeaderMenu = ({closeMenu}) => {
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
                    <button onClick={closeMenu}>
                        <Link className={styles.li} to='/'>Home</Link>
                    </button>
                    <button onClick={closeMenu}>
                        <Link className={styles.li} to='/about-us'>About Us</Link>
                    </button>
                    <button onClick={closeMenu}>
                        <Link className={styles.li} to='events'>Events</Link>
                    </button>
                    <button onClick={closeMenu}>
                        <li className={styles.li}>Contact</li>
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