import {makeAutoObservable} from "mobx";
import {ICalculatorPricePosition} from "../interfaces/ICalculatorPricePosition";
import {calculatorFormFirstStep, calculatorFormSecondStep} from "../constants/calculatorForm";
import {
    ICalculatorFormItem,
    ICalculatorFormSection
} from "../interfaces/ICalculatorFormSection";
import axios from "axios";
import {SEND_BRIEF_ENDPOINT} from "../api/endpoints";
import {siteTypeOptions} from "../constants/calculatorFormOptions";

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

    get siteTypePriceType() {
        const siteType = this.formValues["site_type"]
        const siteTypeOption = siteTypeOptions.find(
            option => option.value === siteType
        )
        if (
            siteTypeOption
            && "priceType" in siteTypeOption
        ) {
            return siteTypeOption.priceType
        }
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
                            price: selectedOption.price,
                            priceType: this.siteTypePriceType
                        })
                    } else if ("priceOptions" in selectedOption) {
                        positions.push({
                            name: selectedOption.pricePositionName,
                            price: selectedOption.priceOptions[siteType],
                            priceType: this.siteTypePriceType
                        })
                    }
                }
            })
        })
        return positions
    }

    get totalPrice() {
        const price = this.pricePositions.reduce(
            (acc, position) => acc + position.price, 0
        ).toLocaleString()
        let prefix = this.siteTypePriceType === "from" ? "от " : ""
        return `${prefix}${price} ₽`
    }
}

export const calculatorStore = new CalculatorStore()