import React, { useEffect } from "react";
import instance from "../api/instance";

const Filter = () => {
  useEffect(() => {
    //discover/movie?with_ids=804150
    ///discover/movie?with_people=287,819
    instance("/discover/movie?with_ids=640146").then((res) =>
      console.log(res.data)
    );
  }, []);
  return <div>Filter</div>;
};

export default Filter;
