import React, {ReactNode} from 'react';
import styles from "./Button.module.scss"

const Button = ({onClick, children}: {
    onClick: () => void,
    children: ReactNode
}) => {
    return (
        <button
            onClick={onClick}
            className={styles.button}
        >
            {children}
        </button>
    );
};

export default Button;