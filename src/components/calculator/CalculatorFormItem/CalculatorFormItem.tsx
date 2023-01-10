import React, {ReactNode} from 'react';
import styles from "./CalculatorFormItem.module.scss"

const CalculatorFormItem = (props: {
    children: ReactNode,
    label: string
}) => {
    return (
        <div className={styles.formItem}>
            <div className={styles.label}>
                {props.label}
                <span className={styles.nowrap}>
                    &nbsp;
                    <div className={styles.questionMark}></div>
                </span>
            </div>
            {props.children}
        </div>
    );
};

export default CalculatorFormItem;