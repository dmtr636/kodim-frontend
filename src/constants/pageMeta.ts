export const pageMeta = [
    {
        path: "/",
        title: "Создание быстрых сайтов под ключ — Студия веб-дизайна",
        description: "Разработка и продвижение сайтов под ключ на заказ. Веб-студия, создание сайтов и веб-приложений. Заказать сайт под ключ: создание интернет-магазина, сайта-визитки, лендинга, корпоративного сайта.",
        keywords: "Веб дизайн, web студия, веб-студия, веб-приложения, дизайн сайтов, разработка сайтов, создание сайтов, сопровождение сайта, веб-компания, интернет-студия, дизайн сайта, заказ сайта, заказ сайтов, заказать сделать сайт, заказать сайт-визитку, изготовление сайта, изготовление сайтов, изготовление сайтов под ключ, разработать сайт, веб-мастерская, разработка и продвижение сайтов, сайт на заказ, сайт под ключ, создание и продвижение сайта, создание интернет-магазина, создание корпоративного сайта, создание сайта-визитки, создание лендинга, услуги сео, продвижение сайтов, СЕО-студия"
    },
    {
        path: "/calculator",
        title: "Калькулятор услуг",
        description: "Рассчитать стоимость сайта, сколько будет стоить сайт. Разработка и сопровождение сайтов. Заказать СЕО-услуги, продвижение сайтов, дизайн сайта. Создание сайта-визитки, создание интернет-магазина, создание корпоративного сайта, создание лендинга. Заказать сайт, веб-приложение и продвижение.",
        keywords: "Стоимость сайта, узнать стоимость, цена сайта, сайт под ключ, создание и продвижение сайта, разработка и продвижение сайта, разработка интернет-магазина, разработка корпоративного сайта, разработка сайта-визитки, разработка лендинга, заказать услуги сео, заказать услугу копирайтера, заказать рекламу, продвижение, заказать дизайн, заказать логотип, сайт для кафе, сайт для магазина, одностраничный лендинг, корпоративный сайт"
    },
    {
        path: "/cases",
        title: "Кейсы",
        description: "Кейсы веб-студии. Заказать сайт под ключ, разработка сайтов и веб-приложений. Лендинги, сайты-визитки, интернет-магазины, корпоративные сайты. Разработка сайта под ключ.",
        keywords: "web дизайн, веб решения, юзабилити, кейсы студии, разработка сайта, сайт под ключ, сайт с нуля, создание сайтов под ключ, заказать сайт-визитку, заказать интернет-магазин, заказать корпоративный сайт"
    },
    {
        path: "/projects",
        title: "Наши продукты",
        description: "Проекты веб-студии. Веб-решения, юзабилити. Студия веб-дизайна кодим, разработка сайтов на заказ.",
        keywords: "проекты студии, сайты на заказ, веб мастерская, сайт с нуля, изготовление сайтов под ключ, веб приложения"
    },
    {
        path: "/documents",
        title: "Документы",
        description: "Документы веб-студии. Политика конфиденциальности, договор-оферта. Сотрудничество и партнёрство с веб-студией кодим.",
        keywords: "документы студии, разработка сайтов на заказ, партнёры, сотрудничество, услуги, данные, конфиденциальность"
    }
]

export const getMetaByPath = (path: string) => {
    return pageMeta.find(meta => meta.path === path)
}
