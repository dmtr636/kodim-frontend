import React, {useState} from 'react'
import styles from "./CalculatorFormSelect.module.scss"
import classNames from "classnames";

export interface ICalculatorFormSelectOption {
    value: string,
    name: string
}

const CalculatorFormSelect = (props: {
    options: ICalculatorFormSelectOption[],
    value: string,
    onChange: (value: string) => void
}) => {
    const [isOpen, setOpen] = useState(false)

    const selectedOption = props.options.find(option => option.value === props.value)

    const handleChange = (value: string) => {
        props.onChange(value)
        setOpen(false)
    }

    return (
        <div className={styles.container}>
            <div
                className={classNames(styles.select, styles.selectActive)}
                onClick={() => setOpen(!isOpen)}
            >
                <div className={styles.selectedOption}>
                    {selectedOption?.name}
                </div>
                <div
                    className={styles.arrow}
                    style={{transform: `rotate(${isOpen ? "180deg" : "0"})`}}
                />
            </div>
            {isOpen &&
                <>
                    <div className={styles.popover}>
                        {props.options.map(option =>
                            <div
                                className={classNames(
                                    styles.listItem,
                                    {[styles.listItemActive]: selectedOption === option}
                                )}
                                onClick={() => handleChange(option.value)}
                            >
                                {option.name}
                            </div>
                        )}
                    </div>
                    <div
                        className={styles.overlay}
                        onClick={() => setOpen(false)}
                    />
                </>
            }
        </div>
    );
};

export default CalculatorFormSelect;