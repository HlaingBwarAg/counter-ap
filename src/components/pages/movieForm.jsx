import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { useParams } from "react-router-dom";

import { genres, getGenres } from "../../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().min(0).required().label("Number In Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  MovieId = () => {
    let { MovieName } = useParams();
  };

  // componentDidMount() {
  //   const genres = getGenres();
  //   this.setState({ genres });

  //   const movieId = this.props.match.params.id;
  //   console.log(movieId);
  // }

  doSubmit = () => {
    // call the server
    console.log("submitted");
  };

  render() {
    return (
      <div className="container">
        <h1 className="my-3">Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderSelect("genreId", genres, "Genre")}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
