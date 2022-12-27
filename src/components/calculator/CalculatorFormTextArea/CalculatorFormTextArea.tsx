import React, {ChangeEvent} from 'react';
import styles from "./CalculatorFormTextArea.module.scss"
import TextareaAutosize from 'react-textarea-autosize';

const CalculatorFormTextArea = (props: {
    value: string,
    onChange: (value: string) => void,
    placeholder: string,
    minRows?: number,
    maxLength?: number
}) => {
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(event.target.value)
    }

    return (
        <TextareaAutosize
            value={props.value}
            onChange={handleChange}
            className={styles.input}
            placeholder={props.placeholder}
            minRows={props.minRows}
            maxLength={props.maxLength}
        />
    );
};

export default CalculatorFormTextArea;