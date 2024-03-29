import React, {useEffect} from 'react';
import {openDevelopmentStore} from "../stores/openDevelopmentStore";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import OpenDevelopmentProjectLayout
    from "../components/openDevelopmentProject/OpenDevelopmentProjectLayout/OpenDevelopmentProjectLayout";
import {Page404} from "./Page404";
import OpenDevelopmentProjectStagesMenu
    from "../components/openDevelopmentProject/OpenDevelopmentProjectStagesMenu/OpenDevelopmentProjectStagesMenu";
import {Helmet} from "react-helmet";
import OpenDevelopmentProjectStageItems
    from "../components/openDevelopmentProject/OpenDevelopmentProjectStageItems/OpenDevelopmentProjectStageItems";
import useWindowDimensions from "../hooks/useWindowDimensions";
import {isMobile} from "../utils/utils";
import OpenDevelopmentProjectStageSelect
    from "../components/openDevelopmentProject/OpenDevelopmentProjectStageSelect/OpenDevelopmentProjectStageSelect";

const OpenDevelopmentProjectPage = observer(() => {
    const {id} = useParams<{id: string}>()
    const store = openDevelopmentStore
    const {width} = useWindowDimensions()

    useEffect(() => {
        store.fetchProject(id ?? "")
    }, [])

    if (store.status === "notFound") {
        return <Page404/>
    }

    return (
        <OpenDevelopmentProjectLayout>
            {store.project ? (
                <>
                    <Helmet>
                        <title>{store.project.name}</title>
                        <meta name="robots" content="noindex" />
                    </Helmet>
                    {isMobile(width) ? (
                        <OpenDevelopmentProjectStageSelect/>
                    ) : (
                        <OpenDevelopmentProjectStagesMenu/>
                    )}
                    <OpenDevelopmentProjectStageItems/>
                </>
            ) : (
                <h2>Загрузка...</h2>
            )}
        </OpenDevelopmentProjectLayout>
    );
});

export default OpenDevelopmentProjectPage;
