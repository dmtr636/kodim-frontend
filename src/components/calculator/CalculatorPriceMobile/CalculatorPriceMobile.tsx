import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import styles from "./style.module.scss"
import classNames from "classnames";
import {calculatorStore} from "../../../stores/calculatorStore";
import {SwipeableDrawer} from "@mui/material";

const drawerHeaderHeight = 60
const bottomPanelHeight = 62

const CalculatorPriceMobile = observer(() => {
    const store = calculatorStore
    const [open, setOpen] = useState(false);

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <div>
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                swipeAreaWidth={drawerHeaderHeight + bottomPanelHeight}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
                PaperProps={{
                    style: {
                        top: "122px",
                        // height: `calc(100${open ? '%' : 'vh'} - ${bottomPanelHeight + drawerHeaderHeight}px)`,
                        overflow: 'visible',
                        background: 'none'
                    }
                }}
                disableBackdropTransition={true}
                transitionDuration={250}
            >
                <div className={classNames(
                    styles.container,
                    {[styles.containerOpen]: open}
                )}>
                    <div
                        className={styles.header}
                    >
                        <div className={styles.title}>
                            Список выбранных услуг
                        </div>
                        <button
                            className={styles.arrowButton}
                            onClick={() => setOpen(!open)}
                        >
                            <div className={styles.arrow}/>
                        </button>
                    </div>
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
            </SwipeableDrawer>

            <div className={classNames(
                styles.bottomPanel,
                {[styles.bottomPanelOpen]: open}
            )}>
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