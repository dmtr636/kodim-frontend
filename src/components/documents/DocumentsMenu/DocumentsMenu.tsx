import React, {ReactNode} from 'react';
import styles from "./DocumentsMenu.module.scss"
import {documentsRoutes} from "../../../routes/documentsRoutes";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import DocumentsCard from "../DocumentsCard/DocumentsCard";

const DocumentsMenu = () => {
    return (
        <DocumentsCard sticky>
            {documentsRoutes.map(route =>
                <NavLink
                    to={route.path}
                    className={({isActive}) => classNames(
                        styles.item,
                        {[styles.itemActive]: isActive}
                    )}
                >
                    <div className={styles.circle} />
                    {route.breadcrumb}
                </NavLink>
            )}
        </DocumentsCard>
    );
};

export default DocumentsMenu;