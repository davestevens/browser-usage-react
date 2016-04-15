import React from "react";
import { render } from "react-dom";
import "./styles/BrowserUsage.scss";
import BrowserList from "./components/BrowserList.jsx";
import data from "./services/data";

class App extends React.Component {
  render () {
    return (
      <div>
        <nav><span>Browser Usage</span></nav>
        <div className="content">
          <div className="chartContainer"></div>
          <div className="browserList">
            <BrowserList data={ this.props.data } />
          </div>
        </div>
      </div>
    );
  }
}

render(<App data={ data } />, document.getElementById("app"));
