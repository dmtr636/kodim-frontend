import {makeAutoObservable} from "mobx";
import axios from "axios";

export class ProjectsStore {
    constructor() {
        makeAutoObservable(this)
    }

    projects: any[] = []
    cases: any[] = []

    isProjectsLoaded = false
    isCasesLoaded = false

    setProjects(data: any[]) {
        this.projects = data
    }

    setCases(data: any[]) {
        this.cases = data
    }

    setProjectsLoaded(value: boolean) {
        this.isProjectsLoaded = value
    }

    setCasesLoaded(value: boolean) {
        this.isCasesLoaded = value
    }

    fetchProjects() {
        axios.get("https://kodim.space/api/kodim/projects").then((res) => {
            this.setProjects(res.data.result)
            this.setProjectsLoaded(true)
        });
    }

    fetchCases() {
        axios.get("https://kodim.space/api/kodim/cases").then((res) => {
            this.setCases(res.data.result)
            this.setCasesLoaded(true)
        });
    }
}

export const projectsStore = new ProjectsStore()