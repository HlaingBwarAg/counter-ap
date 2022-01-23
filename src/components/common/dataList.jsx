import React, { Component } from "react";

const DataList = ({ dataLists, id }) => {
  return (
    <dataLists id={id}>
      {dataLists.map((datalist) => (  
        <option value={datalist} />
      ))}
    </dataLists>
  );
};

{
  /* <datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist> */
}

export default DataList;
