import React, {useState} from 'react'
import styles from "./style.module.scss"
import classNames from "classnames";
import {openDevelopmentStore} from "../../../stores/openDevelopmentStore";
import {IOpenDevelopmentProjectStage} from "../../../interfaces/IOpenDevelopmentProject";
import {ReactComponent as Done} from "../../../assets/openDevelopmentProject/done.svg";

export interface ICalculatorFormSelectOption {
    value: string,
    name: string
}

const OpenDevelopmentProjectStageSelect = () => {
    const store = openDevelopmentStore
    const project = store.project
    const [isOpen, setOpen] = useState(false)

    const handleChange = (stage: IOpenDevelopmentProjectStage) => {
        setOpen(false)
        store.setActiveStage(stage)
    }

    return (
        <div>
            <div className={styles.header}>
                Выберите этап проекта
            </div>
            <div className={styles.container}>
                <div
                    className={classNames(styles.select, styles.selectActive)}
                    onClick={() => setOpen(!isOpen)}
                >
                    <div className={styles.selectedOption}>
                        {store.activeStage?.completed
                            ? <Done className={styles.done}/>
                            : <div className={styles.circle}></div>
                        }
                        {store.activeStage?.name}
                    </div>
                    <div
                        className={styles.arrow}
                        style={{transform: `rotate(${isOpen ? "180deg" : "0"})`}}
                    />
                </div>
                {isOpen &&
                    <>
                        <div className={styles.popover}>
                            {project?.stages.map(stage =>
                                <div
                                    className={classNames(
                                        styles.listItem,
                                        {[styles.listItemActive]: stage === store.activeStage}
                                    )}
                                    onClick={() => handleChange(stage)}
                                >
                                    {stage.completed
                                        ? <Done className={styles.done}/>
                                        : <div className={styles.circle}></div>
                                    }
                                    {stage.name}
                                </div>
                            )}
                        </div>
                        <div
                            className={styles.overlay}
                            onClick={() => setOpen(false)}
                        />
                    </>
                }
            </div>
        </div>
    );
};

export default OpenDevelopmentProjectStageSelect;
