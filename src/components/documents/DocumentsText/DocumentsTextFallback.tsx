import React from 'react';
import styles from "./style.module.scss";

const DocumentsTextFallback = () => {
    return (
        <div className={styles.fallback}>
            <div className={styles.text}>
                <h2>Загрузка</h2>
            </div>
        </div>
    );
};

export default DocumentsTextFallback;