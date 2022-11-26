import React, {ReactNode} from 'react';
import styles from "./ServiceButton.module.scss"

const ServiceButton = ({onClick, children, activeButton}) => {
    debugger
    console.log(activeButton)
    return (
        <button
            onClick={onClick}
            className={`${styles.button} ${activeButton?"active":""}`}
        >
            {children}
        </button>
    );
};

export default ServiceButton;