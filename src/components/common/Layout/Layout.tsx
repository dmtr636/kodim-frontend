import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import {Helmet} from "react-helmet";
import {isTablet} from "../../../utils/utils";
import {Outlet, ScrollRestoration} from "react-router-dom";
import Cookies from "../Cookies/Cookies";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {createRoutes} from "../../../routes/routes";
import {projectsStore} from "../../../stores/projectsStore";

const Layout = () => {
    const breadcrumbs = useBreadcrumbs(createRoutes(projectsStore));
    const [width, setWidth] = useState(window.outerWidth)

    const onResize = () => {
        setWidth(window.outerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    const getTitle = () => {
        if (breadcrumbs.length === 1) {
            return "Создание быстрых сайтов под ключ — Студия веб-дизайна"
        } else {
            return breadcrumbs.slice(-1)[0]?.match?.route?.breadcrumb?.toString()
        }
    }

    return (
        <>
            <Helmet>
                {isTablet(width)
                    ? <meta name="viewport" content="width=1280"/>
                    : <meta name="viewport" content="width=device-width, initial-scale=1"/>
                }
                <title>{getTitle()}</title>
            </Helmet>
            <ScrollRestoration/>
            <Cookies/>

            <div className={styles.layout}>
                <Header/>
                <BreadCrumbs/>
                <main className={styles.main}>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>

    );
};

export default Layout;