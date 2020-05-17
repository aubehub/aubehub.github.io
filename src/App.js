import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
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
    <Router>
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
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <footer></footer>
      </div>
    </Router>
  );
}