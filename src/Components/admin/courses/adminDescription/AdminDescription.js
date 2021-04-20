import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminDescription = () => {
  const { name, moduleId } = useParams();
  const [state, setState] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/courses/${name}/${moduleId}.json`);
      return response.data;
    };
    getData().then((data) => setState(data));
  }, [name, moduleId]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Description</h2>
      <p>Title:{state?.title || "No title"}</p>
      <p>Description:{state?.description || "No description"}</p>
    </div>
  );
};

export default AdminDescription;
