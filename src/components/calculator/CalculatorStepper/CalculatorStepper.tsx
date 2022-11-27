import React from 'react';
import CalculatorCard from "../CalculatorCard/CalculatorCard";
import CalculatorFormItem from "../CalculatorFormItem/CalculatorFormItem";
import CalculatorFormSection from "../CalculatorFormSection/CalculatorFormSection";
import CalculatorFormSelect from "../CalculatorFormSelect/CalculatorFormSelect";
import CalculatorFormToggleButtons from "../CalculatorFormToggleButtons/CalculatorFormToggleButtons";
import {ICalculatorFormItem, ICalculatorFormSection} from "../../../interfaces/ICalculatorFormSection";
import Button from "../../common/Button/Button";
import styles from "./CalculatorStepper.module.scss"
import CalculatorFormTextField from "../CalculatorFormTextField/CalculatorFormTextField";
import CalculatorFormTextArea from "../CalculatorFormTextArea/CalculatorFormTextArea";

const CalculatorStepper = (props: {
    formValues: Record<string, any>,
    onChange: (fieldName: string, value: any) => void,
    formData: ICalculatorFormSection[],
    onNext: () => void,
    onBack?: () => void
}) => {
    const getFormItemElement = (item: ICalculatorFormItem) => {
        switch (item.type) {
            case "select":
                return (
                    <CalculatorFormSelect
                        options={item.options}
                        value={props.formValues[item.name] ?? item.options[0].value}
                        onChange={(value) => props.onChange(item.name, value)}
                    />
                )
            case "toggleButtons":
                return (
                    <CalculatorFormToggleButtons
                        options={item.options}
                        value={props.formValues[item.name] ?? item.options[0].value}
                        onChange={(value) => props.onChange(item.name, value)}
                    />
                )
            case "textField":
                return (
                    <CalculatorFormTextField
                        value={props.formValues[item.name] ?? ""}
                        onChange={(value) => props.onChange(item.name, value)}
                        placeholder={item.placeholder}
                        type={"text"}
                    />
                )
            case "textArea":
                return (
                    <CalculatorFormTextArea
                        value={props.formValues[item.name] ?? ""}
                        onChange={(value) => props.onChange(item.name, value)}
                        placeholder={item.placeholder}
                    />
                )
        }
    }

    return (
        <CalculatorCard>
            {props.formData.map(section =>
                <CalculatorFormSection
                    title={section.title}
                    hideDivider={section.hideDivider}
                    key={section.title}
                >
                    {section.items.map(item =>
                        <CalculatorFormItem
                            label={item.label}
                            key={item.name}
                        >
                            {getFormItemElement(item)}
                        </CalculatorFormItem>
                    )}
                </CalculatorFormSection>
            )}
            <div className={styles.buttons}>
                {props.onBack &&
                    <div className={styles.button}>
                        <Button
                            onClick={props.onBack}
                            fullWidth
                            variant={"outlined"}
                        >
                            Назад
                        </Button>
                    </div>
                }
                {props.onNext &&
                    <div className={styles.button}>
                        <Button
                            onClick={props.onNext}
                            fullWidth
                        >
                            Далее
                        </Button>
                    </div>
                }
            </div>
        </CalculatorCard>
    );
};

export default CalculatorStepper;