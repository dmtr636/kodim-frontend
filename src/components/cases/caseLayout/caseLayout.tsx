import React from "react";
import {CaseCard} from "../CaseCard/CaseCard";
import {useNavigate} from "react-router-dom";
import {projectsStore} from "../../../stores/projectsStore";
import {observer} from "mobx-react-lite";

export const CaseLayout = observer(() => {
  const navigate = useNavigate();

  const dataArray = projectsStore.cases.map((el) => (
    <CaseCard
      onClick={() => navigate("/cases/" + el.id)}
      key={el.id + el.image}
      image={el.image}
      name={el.name}
      description={el.description}
      category={el.category}
    />
  ));

  return <>{dataArray}</>;
});
