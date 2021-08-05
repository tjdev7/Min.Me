import "./App.css";
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import Dashboard from "./components/Dashboard";
import followers from "./components/followers";
import following from "./components/following";

import {
  uniqueNamesGenerator,
  adjectives,
  colors,
} from "unique-names-generator";

import { BrowserRouter, Route, Link } from "react-router-dom";

const shortName = uniqueNamesGenerator({
  dictionaries: [adjectives, colors],
  length: 2,
});

// function usernameSet() {
//   alert('random name set');
// }

// input = "".whatever user inputs

function App() {
  return (
    <div className="App">
      <h1>Min.Me</h1>
      <h4>Minimalist social media platform</h4>

      <header className="mainAvatar">
        <p>
          <span className="avatarStyle">🧔</span>
        </p>

        <h2>{shortName}</h2>
      </header>
      <br />
      <nav>
        <BrowserRouter>
          <Link to="/Dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/followers">
            <li>Followers</li>
          </Link>
          <Link to="/following">
            <li>Following</li>
          </Link>
          {/*<Link to="/Settings"><li>Settings</li></Link>*/}

          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/followers" component={followers} />
          <Route path="/following" component={following} />
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default App;
