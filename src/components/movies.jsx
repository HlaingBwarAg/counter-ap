import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import { Link } from "react-router-dom";
import MovieTable from "./movieTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utility/paginate.js";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Geners", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const newMovies = this.state.movies.filter(
      (newMovie) => newMovie._id !== movie._id
    );
    this.setState({ movies: newMovies });
  };

  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  showAllVideo = () => {
    this.setState({ movies: getMovies() });
  };

  getPageData = () => {
    const { pageSize, currentPage, movies, selectedGenre, sortColumn } =
      this.state;
    const filteredMovie =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;
    const sortedMovie = _.orderBy(
      filteredMovie,
      [sortColumn.path],
      [sortColumn.order]
    );
    const moviesOnPage = paginate(sortedMovie, currentPage, pageSize);

    return { totalCount: filteredMovie.length, data: moviesOnPage };
  };

  render() {
    const { length: movieCount } = this.state.movies;
    const { pageSize, currentPage, selectedGenre, sortColumn } = this.state;

    if (movieCount === 0)
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 m-4">
              <h3>There is no video in table.</h3>
              <button
                onClick={this.showAllVideo}
                className="btn btn-primary btn-sm"
              >
                Show All Video
              </button>
            </div>
          </div>
        </div>
      );

    const { totalCount, data: moviesOnPage } = this.getPageData();

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-4">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            />
          </div>
          <div className="col-9 mt-4">
            <div className="my-3">
              <Link className="btn btn-primary" to="new" role="button">
                New Movies
              </Link>
            </div>
            <h3>There are {totalCount} video in the table.</h3>
            <MovieTable
              moviesOnPage={moviesOnPage}
              sortColumn={sortColumn}
              onLiked={this.handleLiked}
              onSort={this.handleSort}
              onDelete={this.handleDelete}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
