import React from 'react';
import {observer} from "mobx-react-lite";
import DocumentsCard from "../../documents/DocumentsCard/DocumentsCard";
import {openDevelopmentStore} from "../../../stores/openDevelopmentStore";
import CalculatorCard from "../../calculator/CalculatorCard/CalculatorCard";
import styles from "./style.module.scss"
import {domain} from "../../../constants/config";

const OpenDevelopmentProjectStageItems = observer(() => {
    const stage = openDevelopmentStore.activeStage
    return (
        <CalculatorCard>
            <div className={styles.items}>
                {stage?.items.map(item =>
                    <div className={styles.item}>
                        <div className={styles.date}>{item.date}</div>
                        <img className={styles.image} src={`${domain}${item.image}`}/>
                        <div>
                            <div className={styles.header}>{item.header}</div>
                            <div className={styles.text}>{item.text}</div>
                        </div>
                    </div>
                )}
            </div>
        </CalculatorCard>
    );
});

export default OpenDevelopmentProjectStageItems;
