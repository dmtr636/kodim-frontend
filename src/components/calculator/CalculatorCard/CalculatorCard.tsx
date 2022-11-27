import React, {ReactNode} from 'react';
import styles from "./CalculatorCard.module.scss"

const CalculatorCard = (props: {
    children: ReactNode
}) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    );
};

export default CalculatorCard;