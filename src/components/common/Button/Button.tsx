import React, {ReactNode} from 'react';
import styles from "./Button.module.scss"
import classNames from "classnames";

const Button = ({onClick, children, fullWidth, variant, disabled}: {
    onClick: () => void,
    children: ReactNode,
    fullWidth?: boolean,
    variant?: "filled" | "outlined",
    disabled?: boolean
}) => {
    return (
        <button
            onClick={onClick}
            className={classNames(
                styles.button,
                {[styles.fullWidth]: fullWidth},
                {[styles.outlined]: variant === "outlined"}
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;