import {domain} from "../constants/config";

export const SEND_BRIEF_ENDPOINT = `${domain}/api/kodim/brief`

export const getOpenDevelopmentProjectEndpoint = (id: string) => (
    `${domain}/api/kodim/open-development-project/${id}`
)
