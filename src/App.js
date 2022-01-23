import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Movies from "./components/movies";
import MovieForm from "./components/pages/movieForm";
import MovieId from "./components/pages/movieId";
import Customers from "./components/pages/customers";
import Rentals from "./components/pages/rentals";
import LoginForm from "./components/pages/loginForm";
import RegisterForm from "./components/pages/registerForm";
import NotFound from "./components/pages/not-found";

class App extends React.Component {
  render() {  
    return (
      <div className="container-fluid">
        <NavBar />
        <Routes>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/new" element={<MovieForm/>} />
          <Route path="movies/:id" element={<MovieForm />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<NotFound />}></Route>
          {/* <Switch>
            <Route path="/" render={() => <Redirect to="movies" />} />
          </Switch> */}
        </Routes>
      </div>
    );
  }
}

export default App;
