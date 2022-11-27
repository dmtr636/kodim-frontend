import React from 'react';
import styles from "./CalculatorFormToggleButtons.module.scss"
import classNames from "classnames";
import {ICalculatorFormSelectOption} from "../../../interfaces/ICalculatorFormSection";

const CalculatorFormToggleButtons = (props: {
    options: ICalculatorFormSelectOption[],
    value: string,
    onChange: (value: string) => void
}) => {
    return (
        <div className={styles.container}>
            {props.options.map(option =>
                <button
                    className={classNames(
                        styles.button,
                        {[styles.buttonActive]: option.value === props.value}
                    )}
                    onClick={() => props.onChange(option.value)}
                    key={option.value}
                >
                    {option.name}
                </button>
            )}
        </div>
    );
};

export default CalculatorFormToggleButtons;