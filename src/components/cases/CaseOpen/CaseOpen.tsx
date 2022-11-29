import React from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom';
import { CaseOpenCard } from '../CaseOpenCard/CaseOpenCard';

export const CaseOpen = (props:{url:string}) => {
  const [data, setData]= React.useState<any[]>([])
  const params = useParams()
  console.log(props.url)
  React.useEffect(() => {
    axios.get(props.url).then((data) => {
      setData(data.data.result);
    });
  }, []);
  const caseData=data.find(item=>item.id==params.id)

  return (
    <>{caseData?<CaseOpenCard {...caseData}/>:<h1>Loading</h1>}</>
    
  )
}
