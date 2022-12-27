import React, {useState} from 'react';
import styles from "./style.module.scss"

const Cookies = () => {
    const [isShowCookies, setShowCookies] = useState(
        localStorage.getItem("cookies") !== "ok"
    )

    const handleClick = () => {
        setShowCookies(false)
        localStorage.setItem("cookies", "ok")
    }

    if (isShowCookies) {
        return (
            <div className={styles.container}>
                <div className={styles.text}>
                    Этот сайт использует cookies.
                </div>
                <button
                    className={styles.button}
                    onClick={handleClick}
                >
                    ОК
                </button>
            </div>
        )
    }

    return null;
};

export default Cookies;
