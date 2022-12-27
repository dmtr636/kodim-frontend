import React, {ReactNode} from 'react';
import styles from "./DocumentsCard.module.scss"
import classNames from "classnames";

const DocumentsCard = (props: {
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

export default DocumentsCard;