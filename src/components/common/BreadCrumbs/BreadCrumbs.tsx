import React from 'react';
import styles from "./BreadCrumbs.module.scss"
import {NavLink, useLocation} from "react-router-dom";
import {navRoutes} from "../../../constants/navRoutes";

const BreadCrumbs = () => {
    const location = useLocation()
    const path = location.pathname.replace("/", "")

    if (path === "") {
        return null
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <NavLink
                    to={"/"}
                    className={styles.link}
                >
                    Главная
                </NavLink>
                <div className={styles.separator} />
                <NavLink
                    to={path}
                    className={styles.link}
                >
                    {navRoutes.find(route => route.path === path)?.name}
                </NavLink>
            </div>
        </div>
    );
};

export default BreadCrumbs;