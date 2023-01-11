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

export interface ICalculatorFormItemHelpItem {
    header?: string,
    text: string
}

export interface IBaseCalculatorFormItem {
    name: string,
    label: string,
    help?: ICalculatorFormItemHelpItem[]
}

export interface ICalculatorFormSelect extends IBaseCalculatorFormItem {
    type: "select",
    options: ICalculatorFormSelectOption[]
}

export interface ICalculatorFormToggleButtons extends IBaseCalculatorFormItem {
    type: "toggleButtons",
    options: ICalculatorFormSelectOption[]
}

export interface ICalculatorFormTextField extends IBaseCalculatorFormItem {
    type: "textField",
    placeholder: string
}

export interface ICalculatorFormTextArea extends IBaseCalculatorFormItem {
    type: "textArea",
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
