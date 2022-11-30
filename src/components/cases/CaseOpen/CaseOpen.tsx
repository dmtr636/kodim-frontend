import React from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom';
import { CaseOpenCard } from '../CaseOpenCard/CaseOpenCard';
import {observer} from "mobx-react-lite";
import {projectsStore} from "../../../stores/projectsStore";

export const CaseOpen = observer((props:{type: "case" | "project"}) => {
  const params = useParams()

  let data
  if (props.type === "case") {
    data = projectsStore.cases
  } else {
    data = projectsStore.projects
  }

  const caseData=data.find(item=>item.id==params.id)

  return (
    <>{caseData?<CaseOpenCard {...caseData}/>:<h1>Loading</h1>}</>
    
  )
})
