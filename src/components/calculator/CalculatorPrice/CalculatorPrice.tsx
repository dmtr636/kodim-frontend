import React from 'react';
import {observer} from "mobx-react-lite";
import {calculatorStore} from "../../../stores/calculatorStore";
import styles from "./CalculatorPrice.module.scss"

const CalculatorPrice = observer(() => {
    const store = calculatorStore

    return (
        <>
            <div className={styles.positions}>
                {store.pricePositions.map(position =>
                    <div className={styles.position} key={position.name}>
                        <div className={styles.positionName}>
                            {position.name}
                        </div>
                        <div className={styles.positionPrice}>
                            {position.price.toLocaleString()} ₽
                        </div>
                        <hr className={styles.divider}/>
                    </div>
                )}
            </div>
            <div className={styles.total}>
                Итого
                <div className={styles.totalPrice}>
                    {store.totalPrice.toLocaleString()} ₽
                </div>
            </div>
        </>
    );
})

export default CalculatorPrice;