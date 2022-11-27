import React, {ReactNode} from 'react';
import styles from "./CalculatorFormSection.module.scss"

const CalculatorFormSection = (props: {
    children: ReactNode,
    title: string,
    hideDivider?: boolean
}) => {
    return (
        <>
            <div className={styles.h4}>
                {props.title}
            </div>
            {props.children}
            {!props.hideDivider &&
                <div className={styles.divider} />
            }
        </>
    );
};

export default CalculatorFormSection;