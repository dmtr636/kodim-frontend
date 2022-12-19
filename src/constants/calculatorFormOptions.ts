import {ICalculatorFormSelectOption} from "../interfaces/ICalculatorFormSection";

export const siteTypeOptions: ICalculatorFormSelectOption[] = [
    {
        value: "landing",
        name: "Одностраничный лендинг",
        price: 30000,
        pricePositionName: "Одностраничный лендинг"
    },
    {
        value: "corporate",
        name: "Корпоративный для компании",
        price: 50000,
        pricePositionName: "Корпоративный для компании",
    },
    {
        value: "shop",
        name: "Интернет-магазин товаров или услуг",
        price: 40000,
        pricePositionName: "Интернет-магазин товаров или услуг",
    },
    {
        value: "catering",
        name: "Онлайн-продажи для общепита",
        price: 40000,
        pricePositionName: "Онлайн-продажи для общепита",
    },
    {
        value: "portfolio",
        name: "Портфолио",
        price: 20000,
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
        priceOptions: {
            "landing": 2000,
            "corporate": 7000,
            "shop": 6000,
            "catering": 6000,
            "portfolio": 3000
        },
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
        priceOptions: {
            "landing": 3000,
            "corporate": 10000,
            "shop": 7000,
            "catering": 4000,
            "portfolio": 5000
        },
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
        name: "Заказать",
        priceOptions: {
            "landing": 1500,
            "corporate": 4000,
            "shop": 5000,
            "catering": 5000,
            "portfolio": 2000
        },
        pricePositionName: "Базовая SEO-настройка"
    }
]

export const seoTextOptions: ICalculatorFormSelectOption[] = [
    {
        value: "there_is",
        name: "У меня есть"
    },
    {
        value: "order",
        name: "Заказать",
        priceOptions: {
            "landing": 2000,
            "corporate": 10000,
            "shop": 10000,
            "catering": 10000,
            "portfolio": 2000
        },
        pricePositionName: "SEO-текст и общее текстовое сопровождение"
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
        name: "Заказать",
        priceOptions: {
            "landing": 2000,
            "corporate": 5000,
            "shop": 7000,
            "catering": 5000,
            "portfolio": 2000
        },
        pricePositionName: "Рекламная компания в Яндекс Директ"
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
        name: "Персонализированная",
        priceOptions: {
            "landing": 8000,
            "corporate": 20000,
            "shop": 20000,
            "catering": 20000,
            "portfolio": 20000
        },
        pricePositionName: "Админ-панель"
    }
]