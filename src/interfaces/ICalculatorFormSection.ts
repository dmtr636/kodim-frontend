export interface ICalculatorFormSelectOptionWithoutPrice {
    value: string,
    name: string
}

export interface ICalculatorFormSelectOptionWithPrice {
    value: string,
    name: string,
    price: number,
    pricePositionName: string,
    priceType?: "fixed" | "from"
}

export interface ICalculatorFormSelectOptionWithPriceOptions {
    value: string,
    name: string,
    priceOptions: Record<string, number>,
    pricePositionName: string,
    priceType?: "fixed" | "from"
}

export type ICalculatorFormSelectOption =
    ICalculatorFormSelectOptionWithPrice |
    ICalculatorFormSelectOptionWithoutPrice |
    ICalculatorFormSelectOptionWithPriceOptions

export interface ICalculatorFormSelect {
    type: "select",
    label: string,
    name: string,
    options: ICalculatorFormSelectOption[]
}

export interface ICalculatorFormToggleButtons {
    type: "toggleButtons",
    label: string,
    name: string,
    options: ICalculatorFormSelectOption[]
}

export interface ICalculatorFormTextField {
    type: "textField",
    label: string,
    name: string,
    placeholder: string
}

export interface ICalculatorFormTextArea {
    type: "textArea",
    label: string,
    name: string,
    placeholder: string,
    minRows?: number,
    maxLength?: number
}

export type ICalculatorFormItem =
    ICalculatorFormSelect |
    ICalculatorFormToggleButtons |
    ICalculatorFormTextField |
    ICalculatorFormTextArea

export interface ICalculatorFormSection {
    title: string,
    items: ICalculatorFormItem[],
    hideDivider?: boolean
}

