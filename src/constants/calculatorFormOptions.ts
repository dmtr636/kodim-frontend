import {ICalculatorFormSelectOption} from "../interfaces/ICalculatorFormSection";

export const siteTypeOptions: ICalculatorFormSelectOption[] = [
    {
        value: "landing",
        name: "Одностраничный лендинг",
        price: 50000,
        pricePositionName: "Одностраничный лендинг"
    },
    {
        value: "corporate",
        name: "Корпоративный для компании",
        price: 100000,
        pricePositionName: "Корпоративный для компании",
    },
    {
        value: "shop",
        name: "Интернет-магазин товаров или услуг",
        price: 150000,
        pricePositionName: "Интернет-магазин товаров или услуг",
    },
    {
        value: "catering",
        name: "Онлайн-продажи для общепита",
        price: 100000,
        pricePositionName: "Онлайн-продажи для общепита",
    },
    {
        value: "portfolio",
        name: "Портфолио",
        price: 75000,
        pricePositionName: "Онлайн-продажи для общепита",
    }
]


export const logotypeOptions: ICalculatorFormSelectOption[] = [
    {
        value: "there_is",
        name: "У меня есть"
    },
    {
        value: "order",
        name: "Заказать",
        price: 1000,
        pricePositionName: "Логотип сайта"
    },
    {
        value: "not_needed",
        name: "Не нужен на сайте"
    },
]

export const graphicMaterialsOptions: ICalculatorFormSelectOption[] = [
    {
        value: "there_is",
        name: "У меня есть"
    },
    {
        value: "order",
        name: "Заказать",
        price: 1000,
        pricePositionName: "Графические материалы"
    },
    {
        value: "free",
        name: "Взять бесплатные"
    },
]

export const basicSeoOptions: ICalculatorFormSelectOption[] = [
    {
        value: "not_needed",
        name: "Нет необходимости"
    },
    {
        value: "order",
        name: "Заказать"
    }
]

export const seoTextOptions: ICalculatorFormSelectOption[] = [
    {
        value: "there_is",
        name: "У меня есть"
    },
    {
        value: "order",
        name: "Заказать"
    },
    {
        value: "no_text",
        name: "Сайт без текста"
    },
]

export const yandexDirectOptions: ICalculatorFormSelectOption[] = [
    {
        value: "not_needed",
        name: "Нет необходимости"
    },
    {
        value: "order",
        name: "Заказать"
    }
]

export const notificationsOptions: ICalculatorFormSelectOption[] = [
    {
        value: "telegram",
        name: "Телеграм"
    },
    {
        value: "email",
        name: "Электронная почта"
    },
    {
        value: "no_notifications",
        name: "Без уведомлений"
    },
]

export const adminPanelOptions: ICalculatorFormSelectOption[] = [
    {
        value: "standard",
        name: "Стандартная"
    },
    {
        value: "custom",
        name: "Персонализированная"
    }
]