import React, {ReactNode} from 'react';
import styles from "./DocumentsLayout.module.scss"

const DocumentsLayout = (props: {
    children: ReactNode
}) => {
    return (
        <div className={styles.layout}>
            {props.children}
        </div>
    );
};

export default DocumentsLayout;