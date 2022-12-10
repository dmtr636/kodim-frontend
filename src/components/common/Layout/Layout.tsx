import React, {ReactNode} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import {Helmet} from "react-helmet";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {isTablet} from "../../../utils/utils";

const Layout = (props: {
    children: ReactNode
}) => {
    const {width} = useWindowDimensions()
    console.log(width)
    return (
        <div className={styles.layout}>
            <Helmet>
                {isTablet(width) &&
                    <meta name="viewport" content="width=1280" />
                }
            </Helmet>
            <Header/>
            <BreadCrumbs/>
            <main className={styles.main}>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;