import React from "react";
import './App.css';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  HashRouter
} from "react-router-dom";
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ContactPage } from './components/ContactPage';

const MyLink = (props) => {
  const match = useRouteMatch({
    path: props.route,
    exact: true,
  });
  return <Link className={ match ? "active" : ""} to={props.route}>{props.name}</Link>;
}

export default function App() {

  return (
      <HashRouter basename="/">
        <div className="frame">
          <div className="bar">
            <nav>
              <ul>
              <li>
                <MyLink name="Home" route="/" />
              </li>
              <li>
                <MyLink name="Projects" route="/projects" />
              </li>
              <li>
                <MyLink name="Contact" route="/contact" />
              </li>
              </ul>
            </nav>
          </div>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div className="main">
            <Switch>
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
          <footer>A.L.S</footer>
        </div>
      </HashRouter>
    );
}