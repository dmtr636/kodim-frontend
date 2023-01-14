import {makeAutoObservable} from "mobx";
import {IOpenDevelopmentProject, IOpenDevelopmentProjectStage} from "../interfaces/IOpenDevelopmentProject";
import axios from "axios";
import {getOpenDevelopmentProjectEndpoint} from "../api/endpoints";

class OpenDevelopmentStore {
    constructor() {
        makeAutoObservable(this)
    }

    project?: IOpenDevelopmentProject
    stage?: IOpenDevelopmentProjectStage
    status?: "loading" | "notFound" | "error" | "success"

    fetchProject(projectId: string) {
        this.status = "loading"
        axios.get(getOpenDevelopmentProjectEndpoint(projectId))
            .then(res => {
                this.project = res.data.result
                this.stage = this.project?.stages[0]
                this.status = "success"
            })
            .catch(e => {
                this.status = "notFound"
            })
    }

    setActiveStage(stage: IOpenDevelopmentProjectStage) {
        this.stage = stage
    }

    get activeStage() {
        return this.stage ?? this.project?.stages[0]
    }
}

export const openDevelopmentStore = new OpenDevelopmentStore()
