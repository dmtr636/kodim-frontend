import React, {ReactNode} from 'react';
import styles from "./CalculatorCard.module.scss"
import classNames from "classnames";

const CalculatorCard = (props: {
    children: ReactNode,
    sticky?: boolean
}) => {
    return (
        <div className={classNames(
            styles.card,
            {[styles.sticky]: props.sticky}
        )}>
            {props.children}
        </div>
    );
};

export default CalculatorCard;