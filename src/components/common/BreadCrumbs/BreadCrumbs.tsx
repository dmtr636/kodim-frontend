import React from 'react';
import styles from "./BreadCrumbs.module.scss"
import {NavLink} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {createRoutes} from "../../../routes/routes";
import {projectsStore} from "../../../stores/projectsStore";
import {observer} from "mobx-react-lite";

const BreadCrumbs = observer(() => {
    const breadcrumbs = useBreadcrumbs(createRoutes(projectsStore));
    const isShowWrapper = location.pathname !== "/"
    const isShowBreadcrumbs = projectsStore.isProjectsLoaded && projectsStore.isCasesLoaded

    if (!isShowWrapper) {
        return null
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {isShowBreadcrumbs &&
                    breadcrumbs.map((item, index) =>
                        <React.Fragment key={item.key}>
                            {index > 0 &&
                                <div className={styles.separator}/>
                            }
                            <NavLink
                                to={item.match.pathname}
                                className={styles.link}
                            >
                                {item.breadcrumb}
                            </NavLink>
                        </React.Fragment>
                    )
                }
            </div>
        </div>
    );
});

export default BreadCrumbs;