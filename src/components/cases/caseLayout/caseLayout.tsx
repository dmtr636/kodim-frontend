import React from "react";
import axios from "axios";
import { CaseCard } from "../CaseCard/CaseCard";
import { useNavigate } from "react-router-dom";

export const CaseLayout = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState<any[]>([]);
  React.useEffect(() => {
    axios.get("https://kodim.space/api/kodim/cases").then((data) => {
      setData(data.data.result);
    });
  }, []);
  const dataArray = data.map((el) => (
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
};
