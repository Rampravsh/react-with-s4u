import React from "react";
import { useParams } from "react-router-dom";

const DetailedContact = () => {
  const params = useParams();
  console.log(params);
  return <div className="page">DetailedContact {params.cid} </div>;
};

export default DetailedContact;
