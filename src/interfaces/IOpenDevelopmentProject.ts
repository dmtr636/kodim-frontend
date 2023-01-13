export interface IOpenDevelopmentProjectStageItem {
    header: string,
    date: string,
    text: string,
    image: string
}

export interface IOpenDevelopmentProjectStage {
    name: string,
    completed: boolean,
    items: IOpenDevelopmentProjectStageItem[]
}

export interface IOpenDevelopmentProject {
    name: string,
    stages: IOpenDevelopmentProjectStage[]
}
