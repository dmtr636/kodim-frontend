import React from 'react';
import Header from "../Header/Header.";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss"
import {Outlet} from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <BreadCrumbs/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;