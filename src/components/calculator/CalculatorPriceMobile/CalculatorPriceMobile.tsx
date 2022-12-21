import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import styles from "./style.module.scss"
import classNames from "classnames";
import {calculatorStore} from "../../../stores/calculatorStore";
import {Box, Skeleton, styled, SwipeableDrawer, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {Global} from "@emotion/react";

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

const drawerHeaderHeight = 60
const bottomPanelHeight = 62

const CalculatorPriceMobile = observer(() => {
    const store = calculatorStore
    const [expanded, setExpanded] = useState(false)

    const [open, setOpen] = React.useState(false);

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
                        height: `calc(100% - ${drawerHeaderHeight + bottomPanelHeight}px)`,
                        overflow: 'visible',
                    }
                }}
                disableBackdropTransition={true}
                disableScrollLock={false}
            >
                <div className={classNames(
                    styles.container,
                    {[styles.containerOpen]: open}
                )}>
                    <div
                        className={styles.header}
                    >
                        <div className={styles.puller}/>
                        <div className={styles.title}>
                            Список выбранных услуг
                        </div>
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
                                <div className={styles.divider}/>
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