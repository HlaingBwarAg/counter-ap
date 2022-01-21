import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MovieTable extends React.Component {
  // const x = <like></like> ; React Element{}

  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => <Link to={`${movie.title}`}>{movie.title}</Link>,
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onLiked={() => this.props.onLiked(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-primary btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { moviesOnPage, onLiked, onDelete, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        rows={moviesOnPage}
      />
    );
  }
}

export default MovieTable;
