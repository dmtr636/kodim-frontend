import React, {useState} from 'react';
import styles from "./Header.module.scss"
import {navRoutes} from "../../../routes/navRoutes";
import Button from "../Button/Button";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {logo} from "../../../assets/common";
import classNames from "classnames";
import {observer} from "mobx-react-lite";
import {CloseMenuIcon} from "../../../assets/common/closeMenuIcon";
import {BurgerIcon} from "../../../assets/common/burgerIcon";
import {HashLink} from "react-router-hash-link";

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
                <div className={styles.button}>
                    <Button onClick={() => {
                        navigate("calculator", {replace: location.pathname.startsWith("/calculator")})
                    }}>
                        Начать проект
                    </Button>
                </div>

                <button
                    className={styles.burger}
                    onClick={toggleMenu}
                >
                    {isShowMenu
                        ? <CloseMenuIcon />
                        : <BurgerIcon />
                    }
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
                            <div className={styles.menuButton}>
                                <Button onClick={() => {
                                    navigate("calculator", {replace: location.pathname.startsWith("/calculator")})
                                    setShowMenu(false)
                                }}>
                                    Начать проект
                                </Button>
                            </div>
                        </div>
                    </div>
                }
            </header>
        </div>
    );
})

export default Header;