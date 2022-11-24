import React from 'react';
import styles from "./Header.module.scss"
import {routes} from "../../../constants/routes";
import Button from "../Button/Button";
import {NavLink, useNavigate} from "react-router-dom";
import {logo} from "../../../assets/common";
import classNames from "classnames";

const Header = () => {
    const navigate = useNavigate()

    return (
        <header className={styles.header}>
            <NavLink to={"/"}>
                <img src={logo} alt={"logo"}/>
            </NavLink>
            <nav className={styles.nav}>
                {routes.map(route =>
                    <NavLink
                        to={route.path}
                        className={({isActive}) => classNames(
                            styles.navLink,
                            {[styles.navLinkActive]: isActive}
                        )}
                        key={route.path}
                    >
                        {route.name}
                    </NavLink>
                )}
            </nav>
            <div className={styles.button}>
                <Button onClick={() => navigate("/calculator")}>
                    Начать проект
                </Button>
            </div>
        </header>
    );
};

export default Header;