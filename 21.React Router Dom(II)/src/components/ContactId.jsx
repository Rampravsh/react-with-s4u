import React from "react";
import { useParams } from "react-router-dom";

const ContactId = () => {
  const { id } = useParams();
  console.log(id);
  return <div>ContactId:{id} </div>;
};

export default ContactId;
