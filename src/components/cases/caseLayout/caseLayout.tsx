import React from "react";
import axios from "axios";
import { CaseCard } from "../CaseCard/CaseCard";

export const CaseLayout = () => {
  const [data, setData] = React.useState<any[]>([]);
  React.useEffect(() => {
    axios.get("https://kodim.space/api/kodim/cases").then((qwe) => {
      setData(qwe.data.result);
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
