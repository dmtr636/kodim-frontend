import React, {useRef} from 'react';
import styles from "./BreadCrumbs.module.scss"
import {NavLink, useLocation} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {createRoutes} from "../../../routes/routes";
import {projectsStore} from "../../../stores/projectsStore";
import {observer} from "mobx-react-lite";
import {CSSTransition} from 'react-transition-group'


const BreadCrumbs = observer(() => {
    const breadcrumbs = useBreadcrumbs(createRoutes(projectsStore));
    const location = useLocation()
    const nodeRef = useRef(null)

    let isShowWrapper = location.pathname !== "/"
    let isShowBreadcrumbs = projectsStore.isProjectsLoaded && projectsStore.isCasesLoaded

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={isShowWrapper}
            timeout={{
                enter: 150,
                exit: 50
            }}
            classNames={{
                enter: styles.wrapperEnter,
                enterActive: styles.wrapperEnterActive,
                exit: styles.wrapperExit,
                exitActive: styles.wrapperExitActive
            }}
            unmountOnExit
        >
            <div
                className={styles.wrapper}
                ref={nodeRef}
            >
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
        </CSSTransition>
    );
});

export default BreadCrumbs;