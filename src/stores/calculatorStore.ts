import {makeAutoObservable} from "mobx";
import {ICalculatorPricePosition} from "../interfaces/ICalculatorPricePosition";
import {calculatorFormFirstStep, calculatorFormSecondStep} from "../constants/calculatorForm";
import {ICalculatorFormItem, ICalculatorFormSection} from "../interfaces/ICalculatorFormSection";
import axios from "axios";
import {SEND_BRIEF_ENDPOINT} from "../api/endpoints";

const getDefaultFormValues = () => {
    const formValues: Record<string, string> = {};
    const steps = [calculatorFormFirstStep, calculatorFormSecondStep]
    steps.forEach((step: ICalculatorFormSection[]) => {
        step.forEach(section => {
            section.items.forEach(item => {
                if (item.type === "select" || item.type === "toggleButtons") {
                    formValues[item.name] = item.options[0].value
                } else {
                    formValues[item.name] = ""
                }
            })
        })
    })
    return formValues
}

class CalculatorStore {
    constructor() {
        makeAutoObservable(this)
    }

    currentStep = "1"
    formValues: Record<string, string> = getDefaultFormValues()

    setFormValues(values: Record<string, string>) {
        this.formValues = values
    }

    setCurrentStep(step: string) {
        this.currentStep = step
    }

    submitBrief(onSubmit: (status: string) => void) {
        axios
            .post(SEND_BRIEF_ENDPOINT, {
                form_values: this.formValues,
                descriptions: [
                    ...calculatorFormFirstStep.map(section => section.items).flat(),
                    ...calculatorFormSecondStep.map(section => section.items).flat()
                ]
            })
            .then(res => {
                if (res.data.result) {
                    onSubmit("success")
                } else {
                    onSubmit("error")
                }
            })
            .catch(() =>
                onSubmit("error")
            )
    }

    get pricePositions() {
        const positions: ICalculatorPricePosition[] = []
        const siteType = this.formValues["site_type"]
        calculatorFormFirstStep.forEach((section: ICalculatorFormSection) => {
            section.items.forEach((item: ICalculatorFormItem) => {
                if (item.type === "select" || item.type === "toggleButtons") {
                    const selectedValue = this.formValues[item.name] ?? item.options[0].value
                    const selectedOption = item.options.find(option => option.value === selectedValue)!
                    if ("price" in selectedOption) {
                        positions.push({
                            name: selectedOption.pricePositionName,
                            price: selectedOption.price
                        })
                    } else if ("priceOptions" in selectedOption) {
                        positions.push({
                            name: selectedOption.pricePositionName,
                            price: selectedOption.priceOptions[siteType]
                        })
                    }
                }
            })
        })
        return positions
    }

    get totalPrice() {
        return this.pricePositions.reduce((acc, position) => acc + position.price, 0)
    }
}

export const calculatorStore = new CalculatorStore()