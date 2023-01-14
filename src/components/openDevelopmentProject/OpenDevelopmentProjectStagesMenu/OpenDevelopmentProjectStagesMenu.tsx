import React, {ReactNode} from 'react';
import styles from "./style.module.scss"
import {documentsRoutes} from "../../../routes/documentsRoutes";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import DocumentsCard from "../../documents/DocumentsCard/DocumentsCard";
import {openDevelopmentStore} from "../../../stores/openDevelopmentStore";
import {observer} from "mobx-react-lite";
import {ReactComponent as Done} from "../../../assets/openDevelopmentProject/done.svg";

const OpenDevelopmentProjectStagesMenu = observer(() => {
    const store = openDevelopmentStore
    const project = openDevelopmentStore.project
    return (
        <DocumentsCard sticky>
            {project?.stages.map(stage =>
                <button
                    className={classNames(
                        styles.item,
                        {[styles.itemActive]: store.activeStage === stage}
                    )}
                    onClick={() => {
                        store.setActiveStage(stage)
                        window.scrollTo(0,0)
                    }}
                    key={stage.name}
                >
                    {stage.completed
                        ? <Done className={styles.done}/>
                        : <div className={styles.circle}></div>
                    }

                    {stage.name}
                </button>
            )}
        </DocumentsCard>
    );
});

export default OpenDevelopmentProjectStagesMenu;
