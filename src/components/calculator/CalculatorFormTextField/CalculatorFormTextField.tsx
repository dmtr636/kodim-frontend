import React, {ChangeEvent} from 'react';
import styles from "./CalculatorFormTextField.module.scss"
import InputMask from "react-input-mask"

const CalculatorFormTextField = (props: {
    value: string,
    onChange: (value: string) => void,
    placeholder: string,
    type?: "text" | "phone"
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value)
    }

    return (
        <>
            {(props.type ?? "text") === "text" &&
                <input
                    value={props.value}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder={props.placeholder}
                />
            }
            {props.type === "phone" &&
                <InputMask
                    className={styles.phoneInput}
                    mask="+7 (999) 999-99-99"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={handleChange}
                    pattern={"\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}"}
                />
            }
        </>

    );
};

export default CalculatorFormTextField;