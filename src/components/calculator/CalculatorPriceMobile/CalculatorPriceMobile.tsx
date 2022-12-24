import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "./style.module.scss"
import classNames from "classnames";
import {calculatorStore} from "../../../stores/calculatorStore";

const CalculatorPriceMobile = observer(() => {
    const store = calculatorStore
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <div className={classNames(
                styles.drawer,
                {[styles.drawerOpen]: isOpen}
            )}>
                <div
                    className={styles.header}
                >
                    <div className={styles.title}>
                        Список выбранных услуг
                    </div>
                    <button
                        className={styles.arrow}
                        onClick={() => setOpen(!isOpen)}
                    />
                </div>
                <div className={styles.content}>
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
                </div>
            </div>

            <div className={classNames(
                styles.footer,
                {[styles.footerOpen]: isOpen}
            )}>
                <div className={styles.divider}/>
                <div className={styles.total}>
                    Итого
                    <div className={styles.totalPrice}>
                        {store.totalPrice.toLocaleString()} ₽
                    </div>
                </div>
            </div>
        </>
    );
})

export default CalculatorPriceMobile;