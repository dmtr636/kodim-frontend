import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import {Helmet} from "react-helmet";
import {isTablet} from "../../../utils/utils";
import {Outlet, ScrollRestoration, useLocation} from "react-router-dom";
import Cookies from "../Cookies/Cookies";
import {getMetaByPath} from "../../../constants/pageMeta";

const Layout = () => {
    const location = useLocation()
    const [width, setWidth] = useState(window.outerWidth)

    const onResize = () => {
        setWidth(window.outerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    const meta = getMetaByPath(location.pathname)

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
                <main className={styles.main}>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>

    );
};

export default Layout;