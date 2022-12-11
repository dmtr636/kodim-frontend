import {makeAutoObservable} from "mobx";
import axios from "axios";

export class ProjectsStore {
    constructor() {
        makeAutoObservable(this)
    }

    projects: any[] = []
    cases: any[] = []

    setProjects(data: any[]) {
        this.projects = data
    }

    setCases(data: any[]) {
        this.cases = data
    }

    fetchProjects() {
        axios.get("https://kodim.space/api/kodim/projects").then((res) => {
            this.setProjects(res.data.result)
        });
    }

    fetchCases() {
        axios.get("https://kodim.space/api/kodim/cases").then((res) => {
            this.setCases(res.data.result)
        });
    }
}

export const projectsStore = new ProjectsStore()