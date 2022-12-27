import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import {Helmet} from "react-helmet";
import {isTablet} from "../../../utils/utils";
import {Outlet, ScrollRestoration, useLocation, useOutlet} from "react-router-dom";
import Cookies from "../Cookies/Cookies";
import {getMetaByPath} from "../../../constants/pageMeta";
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import {navRoutes} from "../../../routes/navRoutes";

const Layout = () => {
    const location = useLocation()
    const outlet = useOutlet()
    const [width, setWidth] = useState(window.outerWidth)

    const meta = getMetaByPath(location.pathname)
    const { nodeRef } = navRoutes.find((route) => route.path === location.pathname) ?? {}

    const onResize = () => {
        setWidth(window.outerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    return (
        <>
            <Helmet>
                {isTablet(width)
                    ? <meta name="viewport" content="width=1280"/>
                    : <meta name="viewport" content="width=device-width, initial-scale=1"/>
                }
            </Helmet>

            {meta &&
                <Helmet>
                    <title>{meta.title}</title>
                    <meta name={"description"} content={meta.description}/>
                    <meta name={"keywords"} content={meta.keywords}/>
                </Helmet>
            }

            <ScrollRestoration/>
            <Cookies/>

            <div className={styles.layout}>
                <Header/>
                <BreadCrumbs/>

                <SwitchTransition>
                    <CSSTransition
                        key={location.pathname}
                        nodeRef={nodeRef}
                        timeout={{
                            enter: 200,
                            exit: 50
                        }}
                        classNames={{
                            enter: styles.mainEnter,
                            enterActive: styles.mainEnterActive,
                            exit: styles.mainExit,
                            exitActive: styles.mainExitActive
                        }}
                        unmountOnExit
                        enter={!location.pathname.includes("/documents")}
                        exit={false}
                    >
                        {(state) => (
                            <div ref={nodeRef} className={styles.main}>
                                {outlet}
                            </div>
                        )}
                    </CSSTransition>
                </SwitchTransition>

                <Footer/>
            </div>
        </>

    );
};

export default Layout;