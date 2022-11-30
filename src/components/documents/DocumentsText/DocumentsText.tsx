import React from 'react';
import styles from "./DocumentsText.module.scss";

const DocumentsText = (props: {
    text: string[]
}) => {
    return (
        <div className={styles.text}>
            {props.text?.map(block =>
                <div className={styles.p}>
                    {block}
                </div>
            )}
        </div>
    );
};

export default DocumentsText;