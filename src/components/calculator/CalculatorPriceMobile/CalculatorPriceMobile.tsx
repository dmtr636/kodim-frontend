import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import styles from "./style.module.scss"
import classNames from "classnames";
import {calculatorStore} from "../../../stores/calculatorStore";

const CalculatorPriceMobile = observer(() => {
    const store = calculatorStore
    const [expanded, setExpanded] = useState(false)

    return (
        <div
            className={classNames(
                styles.container,
                {[styles.containerExpanded]: expanded}
            )}
        >
            <div className={styles.title}>
                Список выбранных услуг
            </div>
            <button className={styles.arrowButton} onClick={() => setExpanded(!expanded)}>
                <div className={styles.arrow}/>
            </button>
            {expanded &&
                <div className={styles.positions}>
                    {store.pricePositions.map(position =>
                        <div className={styles.position} key={position.name}>
                            <div className={styles.positionName}>
                                {position.name}
                            </div>
                            <div className={styles.positionPrice}>
                                {position.price.toLocaleString()} ₽
                            </div>
                            <div className={styles.divider}/>
                        </div>
                    )}
                </div>
            }
            <div className={styles.bottom}>
                <div className={styles.divider}/>
                <div className={styles.total}>
                    Итого
                    <div className={styles.totalPrice}>
                        {store.totalPrice.toLocaleString()} ₽
                    </div>
                </div>
            </div>
        </div>
    );
})

export default CalculatorPriceMobile;