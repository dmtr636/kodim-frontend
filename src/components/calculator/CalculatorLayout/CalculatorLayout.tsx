import React, {ReactNode} from 'react';
import styles from "./CalculatorLayout.module.scss"

const CalculatorLayout = (props: {
    children: ReactNode
}) => {
    return (
        <div className={styles.layout}>
            {props.children}
        </div>
    );
};

export default CalculatorLayout;