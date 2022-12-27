import React from 'react';
import styles from "./CalculatorSubmitResult.module.scss"

const CalculatorSubmitResult = (props: {
    success: boolean
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                {props.success
                    ? "Заявка отправлена, а значит, мы скоро свяжемся!"
                    : "Что-то пошло не так. Попробуйте ешё раз"
                }
            </div>
        </div>
    );
};

export default CalculatorSubmitResult;