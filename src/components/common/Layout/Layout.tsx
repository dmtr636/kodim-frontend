import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import {Helmet} from "react-helmet";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {isTablet} from "../../../utils/utils";
import {Outlet, ScrollRestoration} from "react-router-dom";

const Layout = () => {
    const {width} = useWindowDimensions()

    return (
        <div className={styles.layout}>
            <ScrollRestoration />

            <Helmet>
                {isTablet(width)
                    ? <meta name="viewport" content="width=1280" />
                    : <meta name="viewport" content="width=device-width, initial-scale=1" />
                }
            </Helmet>

            <Header/>
            <BreadCrumbs/>
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;