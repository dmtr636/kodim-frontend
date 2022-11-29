import React from 'react'
import axios from 'axios'
import { CaseCard } from '../cases/CaseCard/CaseCard';
export const ProjectsLayout = () => {
    const [data, setData] = React.useState<any[]>([]);
    React.useEffect(() => {
      axios.get("https://kodim.space/api/kodim/projects").then((data) => {
        setData(data.data.result);
      });
    }, []);
    console.log(data);
    const dataArray = data.map((el) => (
      <CaseCard
        key={el.id}
        image={el.image}
        name={el.name}
        description={el.description}
        category={el.category}
      />
    ));
  
    return <>{dataArray}</>;
  };
