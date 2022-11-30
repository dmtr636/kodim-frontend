import {makeAutoObservable} from "mobx";
import axios from "axios";

export class ProjectsStore {
    constructor() {
        makeAutoObservable(this)
    }

    projects: any[] = []
    cases: any[] = []

    fetchProjects() {
        axios.get("https://kodim.space/api/kodim/projects").then((res) => {
            this.projects = res.data.result
        });
    }

    fetchCases() {
        axios.get("https://kodim.space/api/kodim/cases").then((res) => {
            this.cases = res.data.result
        });
    }
}

export const projectsStore = new ProjectsStore()