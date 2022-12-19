import React, {useState} from 'react';
import styles from "./Header.module.scss"
import {navRoutes} from "../../../constants/navRoutes";
import Button from "../Button/Button";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {logo} from "../../../assets/common";
import classNames from "classnames";
import {observer} from "mobx-react-lite";
import {CloseMenuIcon} from "../../../assets/common/closeMenuIcon";
import {BurgerIcon} from "../../../assets/common/burgerIcon";

const Header = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isShowMenu, setShowMenu] = useState(false)

    return (
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
                        preventScrollReset={route.preventScrollReset}
                        end
                    >
                        {route.breadcrumb}
                    </NavLink>
                )}
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
                onClick={() => setShowMenu(!isShowMenu)}
            >
                {isShowMenu
                    ? <CloseMenuIcon />
                    : <BurgerIcon />
                }
            </button>
            {isShowMenu &&
                <div
                    className={styles.overlay}
                    onClick={() => setShowMenu(false)}
                >
                    <div
                        className={styles.menu}
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
                                    onClick={() => setShowMenu(false)}
                                    preventScrollReset={route.preventScrollReset}
                                    end
                                >
                                    {route.breadcrumb}
                                </NavLink>
                            )}
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
    );
})

export default Header;