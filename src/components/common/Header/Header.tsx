import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss"
import {navRoutes} from "../../../routes/navRoutes";
import Button from "../Button/Button";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {logo} from "../../../assets/common";
import classNames from "classnames";
import {observer} from "mobx-react-lite";
import {HashLink} from "react-router-hash-link";
import telegramLink from "../../../assets/common/telegram.svg"
import Burger from "./Burger/Burger";

const Header = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isShowMenu, setShowMenu] = useState(false)
    const [isMenuExiting, setMenuExiting] = useState(false)

    const toggleMenu = () => {
        if (!isShowMenu) {
            setShowMenu(true)
        } else {
            setMenuExiting(true)
            setTimeout(() => {
                setMenuExiting(false)
                setShowMenu(false)
            }, 250)
        }
    }

    useEffect(() => {
        [telegramLink].forEach((src) => {
            (new Image()).src = src;
        });
    }, []);

    return (
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <NavLink to={"/"}>
                    <img className={styles.logo} src={logo} alt={"logo"}/>
                </NavLink>
                <nav className={styles.nav}>
                    {navRoutes.map(route =>
                        <NavLink
                            to={route.path}
                            className={({isActive}) => classNames(
                                styles.navLink,
                                {[styles.navLinkActive]: isActive && !route.path.includes("#")}
                            )}
                            key={route.path}
                            end
                        >
                            {route.breadcrumb}
                        </NavLink>
                    )}
                    <HashLink
                        to={"/#faq"}
                        className={styles.navLink}
                        smooth={true}
                    >
                        FAQ
                    </HashLink>
                </nav>
                <div className={styles.actions}>
                    <a
                        className={styles.telegramLink}
                        href={"https://t.me/kodim_support_bot"}
                        target={"_blank"}
                    >
                        <img src={telegramLink}/>
                    </a>
                    <Button onClick={() => {
                        navigate("calculator", {replace: location.pathname.startsWith("/calculator")})
                    }}>
                        Начать проект
                    </Button>
                </div>

                <button
                    onClick={toggleMenu}
                    className={styles.burger}
                >
                    <Burger open={isShowMenu && !isMenuExiting}/>
                </button>

                {isShowMenu &&
                    <div
                        className={classNames(
                            styles.overlay,
                            {[styles.overlayFadingOut]: isMenuExiting}
                        )}
                        onClick={toggleMenu}
                    >
                        <div
                            className={classNames(
                                styles.menu,
                                {[styles.menuExiting]: isMenuExiting}
                            )}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <nav className={styles.menuNav}>
                                {navRoutes.map(route =>
                                    <NavLink
                                        to={route.path}
                                        className={({isActive}) => classNames(
                                            styles.navLink,
                                            {[styles.navLinkActive]: isActive && !route.path.includes("#")}
                                        )}
                                        key={route.path}
                                        onClick={toggleMenu}
                                        end
                                    >
                                        {route.breadcrumb}
                                    </NavLink>
                                )}
                                <HashLink
                                    to={"/#faq"}
                                    className={styles.navLink}
                                    onClick={toggleMenu}
                                    smooth={true}
                                >
                                    FAQ
                                </HashLink>
                            </nav>
                            <div className={styles.menuActions}>
                                <Button onClick={() => {
                                    navigate("calculator", {replace: location.pathname.startsWith("/calculator")})
                                    setShowMenu(false)
                                }}>
                                    Начать проект
                                </Button>
                                <a
                                    className={styles.telegramLink}
                                    href={"https://t.me/kodim_support_bot"}
                                    target={"_blank"}
                                >
                                    <img src={telegramLink}/>
                                </a>
                            </div>
                        </div>
                    </div>
                }
            </header>
        </div>
    );
})

export default Header;
