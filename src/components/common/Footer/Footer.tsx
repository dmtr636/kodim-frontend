import React from 'react';
import styles from "./Footer.module.scss"
import {NavLink} from "react-router-dom";

const data = [
    {
        title: "Документы",
        items: [
            {
                name: "Политика конфиденциальности",
                path: "/documents/privacy",
                navLink: true,
            },
            {
                name: "Договор-оферта",
                path: "/documents/contract",
                navLink: true,
            },
        ]
    },
    {
        title: "Меню",
        items: [
            {
                name: "Кейсы",
                path: "/cases",
                navLink: true,
            },
            {
                name: "Наши продукты",
                path: "/projects",
                navLink: true,
            },
            {
                name: "Калькулятор услуг",
                path: "/calculator",
                navLink: true,
            }
        ]
    },
    {
        title: "Связаться",
        items: [
            {
                name: "Задать вопрос в телеграм",
                path: "https://t.me/kodim_support_bot",
                navLink: false,
            },
            {
                name: "Написать на почту",
                path: "mailto:kodimstudio@gmail.com",
                navLink: false,
            }
        ]
    },
    {
        title: "Ещё",
        items: [
            {
                name: "Мы в Play Market",
                path: "https://play.google.com/store/apps/dev?id=5079685909738071932&hl=ru",
                navLink: false,
            },
            {
                name: "Открытая разработка",
                path: "/open-development",
                navLink: true,
            }
        ]
    }
]

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.menu}>
                    {data.map(column =>
                        <div key={column.title}>
                            <div className={styles.columnTitle}>
                                {column.title}
                            </div>
                            <div className={styles.columnItems}>
                                {column.items.map(item =>
                                    item.navLink
                                        ?
                                        <NavLink
                                            to={item.path}
                                            className={styles.columnItem}
                                            key={item.path}
                                        >
                                            {item.name}
                                        </NavLink>
                                        :
                                        <a
                                            className={styles.columnItem}
                                            target={"_blank"}
                                            href={item.path}
                                            key={item.path}
                                        >
                                            {item.name}
                                        </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomContent}>
                    <div className={styles.mailIcon} />
                    <a
                        className={styles.email}
                        href={"mailto:kodimstudio@gmail.com"}
                    >
                        kodimstudio@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
