import { reduce } from "lodash";
import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/pages/movieForm";
import NavBar from "./components/navBar";
import Customers from "./components/pages/customers";
import NotFound from "./components/pages/not-found";
import Rentals from "./components/pages/rentals";
import LoginForm from "./components/loginForm";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <Routes>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieForm />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/login" element={<LoginForm />} />
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
