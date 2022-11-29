import React from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom';
import { CaseOpenCard } from '../CaseOpenCard/CaseOpenCard';

export const CaseOpen = () => {
  const [data, setData]= React.useState<any[]>([])
  const params = useParams()
  React.useEffect(() => {
    axios.get("https://kodim.space/api/kodim/cases").then((data) => {
      setData(data.data.result);
    });
  }, []);
  const caseData=data.find(item=>item.id==params.id)

  return (
    <CaseOpenCard {...caseData}/>
  )
}
