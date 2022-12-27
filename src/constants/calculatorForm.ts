import {ICalculatorFormSection} from "../interfaces/ICalculatorFormSection";
import {
    adminPanelOptions,
    basicSeoOptions,
    graphicMaterialsOptions,
    logotypeOptions,
    notificationsOptions,
    seoTextOptions,
    siteTypeOptions,
    yandexDirectOptions
} from "./calculatorFormOptions";

export const calculatorFormFirstStep: ICalculatorFormSection[] = [
    {
        title: "Рассчитать стоимость проекта",
        items: [
            {
                type: "select",
                label: "Выберите тип сайта",
                name: "site_type",
                options: siteTypeOptions
            }
        ]
    },
    {
        title: "Узнаваемость проекта",
        items: [
            {
                type: "toggleButtons",
                label: "Логотип сайта",
                name: "logotype",
                options: logotypeOptions
            },
            {
                type: "toggleButtons",
                label: "Графические материалы (фото, иллюстрации, видео)",
                name: "graphic_materials",
                options: graphicMaterialsOptions
            }
        ]
    },
    {
        title: "Поисковая оптимизация",
        items: [
            {
                type: "toggleButtons",
                label: "Базовая SEO-настройка",
                name: "basic_seo",
                options: basicSeoOptions
            },
            {
                type: "toggleButtons",
                label: "SEO-текст и общее текстовое сопровождение",
                name: "seo_text",
                options: seoTextOptions
            }
        ]
    },
    {
        title: "Реклама",
        items: [
            {
                type: "toggleButtons",
                label: "Рекламная компания в Яндекс Директ",
                name: "yandex_direct",
                options: yandexDirectOptions
            },
        ]
    },
    {
        title: "Программирование",
        items: [
            {
                type: "toggleButtons",
                label: "Уведомления и заявки с сайта",
                name: "notifications",
                options: notificationsOptions
            },
            {
                type: "toggleButtons",
                label: "Управление сайтом, админ-панель",
                name: "admin_panel",
                options: adminPanelOptions
            }
        ]
    },
]

export const calculatorFormSecondStep: ICalculatorFormSection[] = [
    {
        title: "Расскажите о проекте",
        hideDivider: true,
        items: [
            {
                type: "textArea",
                label:
                    "Был ли у вас уже сайт этого проекта?\n" +
                    "Если да, то вставьте ссылку",
                name: "old_site",
                placeholder: "Оставьте поле пустым, если не было",
                minRows: 1
            },
            {
                type: "textArea",
                label:
                    "Есть ли пример сайта или сайтов, которые вам понравились\n" +
                    "или вдохновили для вашего проекта?",
                name: "reference_sites",
                placeholder: "Оставьте поле пустым, если таких нет",
                minRows: 1,
                maxLength: 500
            },
            {
                type: "textArea",
                label: "Опишите задачу в свободной форме",
                name: "task_description",
                placeholder:
                    "В пример. Мне нужен сайт, на котором будут представлены " +
                    "мои услуги. Хочу, чтобы мне поступали заявки, чтобы я смог " +
                    "перезвонить своим заинтересованным клиентам и назначить " +
                    "им встречу.",
                minRows: 4,
                maxLength: 2500
            }
        ]
    },
]