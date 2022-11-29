import React from 'react';
import styles from "./BreadCrumbs.module.scss"
import {NavLink, useLocation} from "react-router-dom";
import {navRoutes} from "../../../constants/navRoutes";
import {documentsRoutes} from "../../../constants/documentsRoutes";

const routes = [
    ...navRoutes,
    ...documentsRoutes,
    {
        name: "Документы",
        path: "documents"
    }
]

const getRoute = (path: string) => {
    return routes.find(route => route.path === path)
}

const BreadCrumbs = () => {
    const location = useLocation()
    const paths = location.pathname.split("/")

    const getBreadcrumbPath = (index: number) => {
        return paths.slice(0, index + 1).join("/")
    }

    if (location.pathname === "/") {
        return null
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {paths.map((path, index) => {
                    const route = getRoute(path)
                    if (route) {
                        return (
                            <>
                                {index > 0 &&
                                    <div className={styles.separator}/>
                                }
                                <NavLink
                                    to={getBreadcrumbPath(index)}
                                    className={styles.link}
                                >
                                    {route.name}
                                </NavLink>
                            </>
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default BreadCrumbs;