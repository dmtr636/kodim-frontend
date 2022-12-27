import React from 'react'
import { CaseCard } from '../cases/CaseCard/CaseCard';
import { useNavigate } from 'react-router-dom';
import {projectsStore} from "../../stores/projectsStore";
import {observer} from "mobx-react-lite";

export const ProjectsLayout = observer(() => {
    const navigate = useNavigate()

    const dataArray = projectsStore.projects.map((el) => (
      <CaseCard
        onClick={()=>navigate("/projects/"+el.id)}
        key={el.id+el.image}
        image={el.image}
        name={el.name}
        description={el.description}
        category={el.category}
      />
    ));

    return <>{dataArray}</>;
});
