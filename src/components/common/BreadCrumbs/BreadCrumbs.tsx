import React from 'react';
import styles from "./BreadCrumbs.module.scss"
import {NavLink, useLocation} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {createRoutes} from "../../../routes/routes";
import {projectsStore} from "../../../stores/projectsStore";
import {observer} from "mobx-react-lite";


const BreadCrumbs = observer(() => {
    const breadcrumbs = useBreadcrumbs(createRoutes(projectsStore));
    const location = useLocation()

    if (location.pathname === "/") {
        return null
    }

    if (!projectsStore.projects.length || !projectsStore.cases.length) {
        return null
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {breadcrumbs.map((item, index) =>
                    <>
                        {index > 0 &&
                            <div className={styles.separator}/>
                        }
                        <NavLink
                            to={item.match.pathname}
                            className={styles.link}
                        >
                            {item.breadcrumb}
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    );
});

export default BreadCrumbs;