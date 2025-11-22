import React, {useState} from 'react';
import styles from './Header.module.css';
import Logo from '../../images/header/Logo.png';
import ArrowDown  from '../../images/header/Arrow.png';
import BritishFlag from '../../images/header/English.png';
import UkrainianFlag from '../../images/header/Ukraine (UA).png';
import NorwegianFlag from '../../images/header/Norway (NO).png'
import menu from '../../images/header/menu.png'
import HeaderMenu from "./HeaderMenu";
import {Link, NavLink} from "react-router-dom";

const languageFlags = {
    English: BritishFlag,
    Українська: UkrainianFlag,
    Norsk: NorwegianFlag,
};


const Header = () => {
    const [currentLanguage, setCurrentLanguage] = useState('English')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClickDropdown = (lang) => {
      setCurrentLanguage(lang)
      setIsDropdownOpen(false)
    }
    const handleMenu = () => {
        setIsMenuOpen(prevState => !prevState)
    }

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.logo_container}>
                    <img src={Logo} alt="logo" />
                </div>
                <nav>
                    <ul className={styles.nav_list}>
                        <Link className={styles.link} to='/'>Home</Link>
                        <Link className={styles.link} to='/about-us'>About Us</Link>
                        <Link className={styles.link} to='/events'>Events</Link>
                        <Link
                            to='/about-us'
                            state={{ scrollTo: "contact" }}
                            className={styles.link}
                        >
                            <button>Contact</button>
                        </Link>
                    </ul>
                </nav>
                <div className={styles.user_options}>
                    <div className={styles.dropdown}>
                        <div className={styles.mobile_menu}>
                            <button className={styles.dropdown_btn} onClick={() => setIsDropdownOpen((prev) => !prev)}>
                                <img className={styles.flag} src={languageFlags[currentLanguage]} alt="flag"/>
                                <p className={styles.current_lang}>{currentLanguage}</p>
                                <img className={styles.arrow_icon} src={ArrowDown} alt="ArrowDown"/>
                            </button>
                            <button onClick={handleMenu} className={styles.menu_btn}>
                                <img src={menu} alt="menu"/>
                            </button>
                        </div>
                        <div className={`${styles.dropdown_content} ${isDropdownOpen ? styles.show : ""}`}>
                            <div className={styles.dropdown_container}>
                                <div className={currentLanguage === 'English' ? 'active-language' : ''}>
                                    <button onClick={() => handleClickDropdown('English')} className={styles.lang_btn}>
                                        <img className={styles.flag} src={BritishFlag} alt="flag"/>
                                        English
                                    </button>
                                </div>
                                <div className={currentLanguage === 'Українська' ? 'active-language' : ''}>
                                    <button onClick={() => handleClickDropdown('Українська')} className={styles.lang_btn}>
                                        <img className={styles.flag} src={UkrainianFlag} alt="flag"/>
                                        Українська
                                    </button>
                                </div>
                                <div className={currentLanguage === 'Norsk' ? 'active-language' : ''}>
                                    <button onClick={() => handleClickDropdown('Norsk')} className={styles.lang_btn}>
                                        <img className={styles.flag} src={NorwegianFlag} alt="flag"/>
                                        Norsk
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={styles.join_btn}>
                        Join Us
                    </button>
                </div>
            </div>
            {isMenuOpen ? <HeaderMenu closeMenu={handleMenu} /> : null}
        </header>
    );
};

export default Header;