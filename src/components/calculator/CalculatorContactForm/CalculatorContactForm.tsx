import React, {useState} from 'react';
import CalculatorFormSection from "../CalculatorFormSection/CalculatorFormSection";
import CalculatorFormItem from "../CalculatorFormItem/CalculatorFormItem";
import CalculatorFormTextField from "../CalculatorFormTextField/CalculatorFormTextField";
import styles from "./CalculatorContactForm.module.scss"
import CalculatorCard from "../CalculatorCard/CalculatorCard";
import classNames from "classnames";
import {checkboxChecked} from "../../../assets/calculator";
import Button from "../../common/Button/Button";
import {calculatorStore} from "../../../stores/calculatorStore";

const CalculatorContactForm = (props: {
    formValues: Record<string, any>,
    onChange: (fieldName: string, value: any) => void,
    onBack: () => void,
    onSubmit: (status: string) => void,
}) => {
    const [checked, setChecked] = useState(false)

    const phoneRegex = new RegExp("\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}")

    const isValid =
        checked &&
        (props.formValues["full_name"] ?? "").length &&
        phoneRegex.test((props.formValues["phone"] ?? "")) &&
        (props.formValues["email"] ?? "").length

    return (
        <CalculatorCard>
            <CalculatorFormSection
                title={"Контактные данные"}
                hideDivider
            >
                <CalculatorFormItem label={"Все поля обязательны для заполнения"}>
                    <div className={styles.inputs}>
                        <CalculatorFormTextField
                            value={props.formValues["full_name"]}
                            onChange={(value) => props.onChange("full_name", value)}
                            placeholder={"ФИО"}
                        />
                        <CalculatorFormTextField
                            value={props.formValues["phone"]}
                            onChange={(value) => props.onChange("phone", value)}
                            placeholder={"Телефон, по которому мы можем связаться"}
                            type={"phone"}
                        />
                        <CalculatorFormTextField
                            value={props.formValues["email"]}
                            onChange={(value) => props.onChange("email", value)}
                            placeholder={"Электронная почта"}
                        />
                    </div>
                </CalculatorFormItem>
            </CalculatorFormSection>
            <div className={styles.checkboxRow}>
                <button
                    className={classNames(
                        styles.checkbox,
                        {[styles.checkboxChecked]: checked}
                    )}
                    onClick={() => setChecked(!checked)}
                >
                    {checked && checkboxChecked}
                </button>
                <div className={styles.text}>
                    {"Как заказчик, я ознакомлен и согласен с условиями "}
                    <a className={styles.link}>
                        Публичной оферты
                    </a>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button
                    onClick={props.onBack}
                    variant={"outlined"}
                    fullWidth
                >
                    Назад
                </Button>
                <Button
                    onClick={() => calculatorStore.submitBrief(props.onSubmit)}
                    fullWidth
                    disabled={!isValid}
                >
                    Отправить
                </Button>
            </div>
            <div className={styles.privacyText}>
                <div className={styles.text}>
                    {
                        "Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных\n" +
                        "данных согласно условиям "
                    }
                    <a className={styles.link}>
                        Политики конфиденциальности
                    </a>
                </div>
            </div>
        </CalculatorCard>
    )
};

export default CalculatorContactForm;