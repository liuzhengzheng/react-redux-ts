import * as React from "react";
import "./App.css";

import { Link } from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">page1</Link>
            </li>
            <li>
              <Link to="/page2">page2</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
