import React, {ReactNode} from 'react';
import styles from "./DocumentsMenu.module.scss"
import {documentsRoutes} from "../../../constants/documentsRoutes";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import DocumentsCard from "../DocumentsCard/DocumentsCard";

const DocumentsMenu = () => {
    return (
        <DocumentsCard>
            {documentsRoutes.map(route =>
                <NavLink
                    to={`/documents/${route.path}`}
                    className={({isActive}) => classNames(
                        styles.item,
                        {[styles.itemActive]: isActive}
                    )}
                >
                    <div className={styles.arrow} />
                    {route.name}
                </NavLink>
            )}
        </DocumentsCard>
    );
};

export default DocumentsMenu;