import React, { Component } from "react";
import { useParams } from "react-router-dom";

const MovieId = () => {
  let { id } = useParams();
  return <h1>Movie Form : {id} </h1>;
};

export default MovieId;
