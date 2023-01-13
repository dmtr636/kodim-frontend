import React, {ReactNode} from 'react';
import styles from "./style.module.scss"

const OpenDevelopmentProjectLayout = (props: {
    children: ReactNode
}) => {
    return (
        <div className={styles.layout}>
            {props.children}
        </div>
    );
};

export default OpenDevelopmentProjectLayout;
