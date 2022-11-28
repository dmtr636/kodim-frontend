import React, {ReactNode} from 'react';
import styles from "./DocumentsCard.module.scss"

const DocumentsCard = (props: {
    children: ReactNode
}) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    );
};

export default DocumentsCard;