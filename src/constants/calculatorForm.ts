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
                options: siteTypeOptions,
                help: [
                    {
                        header: "Сайт-визитка",
                        text:
                            " — одностраничный \n" +
                            "сайт с\xa0основной информацией \n" +
                            "об\xa0услугах, товаре, мероприятии, \n" +
                            "человеке и т. д."
                    },
                    {
                        header: "Корпоративный",
                        text:
                            " — многостраничный\n" +
                            "сайт компании, содержащий всю\n" +
                            "информацию о\xa0деятельности. "
                    },
                    {
                        header: "Интернет-магазин",
                        text:
                            " — сайт для продаж\n" +
                            "товаров или услуг с\xa0возможностью\n" +
                            "онлайн оплаты."
                    },
                    {
                        header: "Портфолио / Блог",
                        text:
                            " — сайт для ведения\n" +
                            "блога и презентации своих работ."
                    },
                    {
                        header: "Другое",
                        text:
                            " — проект с определённым\n" +
                            "функционалом и специфическими\n" +
                            "задачами, который не\xa0попадает \n" +
                            "под категории, описанные выше."
                    }
                ]
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
                options: basicSeoOptions,
                help: [
                    {
                        text:
                            "Проекту подбираются ключевые слова,\n" +
                            "страницам прописываются корректные \n" +
                            "названия и описания для поисковой \n" +
                            "системы. Подключаются необходимые\n" +
                            "инструменты для анализа статистики.\n" +
                            "Сайт начинает продвигаться \n" +
                            "в\xa0поисковой выдаче."
                    }
                ]
            },
            {
                type: "toggleButtons",
                label: "SEO-текст и общее текстовое сопровождение",
                name: "seo_text",
                options: seoTextOptions,
                help: [
                    {
                        text:
                            "Для всего проекта копирайтер пишет \n" +
                            "маркетинговый текст с\xa0учётом \n" +
                            "ключевых слов. Это благоприятно \n" +
                            "влияет на\xa0общую конверсию сайта\n" +
                            "и продвижение в\xa0поисковой выдаче."
                    }
                ]
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
                options: notificationsOptions,
                help: [
                    {
                        text:
                            "Если проект связан \n" +
                            "с\xa0получением уведомлений \n" +
                            "от\xa0клиентов: товары, заявки \n" +
                            "на\xa0услуги, заказы обратного\n" +
                            "звонка, то\xa0нужно выбрать\n" +
                            "подходящий способ \n" +
                            "их\xa0получения владельцем \n" +
                            "сайта."
                    }
                ]
            },
            {
                type: "toggleButtons",
                label: "Управление сайтом, админ-панель",
                name: "admin_panel",
                options: adminPanelOptions,
                help: [
                    {
                        text:
                            "Персонализированная \n" +
                            "админ-панель является\n" +
                            "уникальной и создаётся\n" +
                            "под\xa0конкретные нужды\n" +
                            "проекта."
                    }
                ]
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
