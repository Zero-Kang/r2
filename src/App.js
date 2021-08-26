import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Redirect, Route, Router, Switch} from "react-router-dom";
import Movies from "./pages/Movies";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path={"/movies"}>
            <Movies></Movies>
        </Route>
        <Route path={"/reviews"}>
            <Reviews></Reviews>
        </Route>
          <Route path={"/"}>
              <Redirect to={"/movies"}></Redirect>
          </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
