import React from 'react';
import {observer} from "mobx-react-lite";
import {openDevelopmentStore} from "../../../stores/openDevelopmentStore";
import styles from "./style.module.scss"
import {domain} from "../../../constants/config";

const OpenDevelopmentProjectStageItems = observer(() => {
    const stage = openDevelopmentStore.activeStage
    return (
        <div className={styles.container}>
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
        </div>
    );
});

export default OpenDevelopmentProjectStageItems;
