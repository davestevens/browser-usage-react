import React from "react";
import { render } from "react-dom";
import "./styles/BrowserUsage.scss";
import BrowserList from "./components/BrowserList.jsx";
import data from "./services/data";

class App extends React.Component {
  render () {
    return (
      <BrowserList data={ this.props.data } />
    );
  }
}

render(<App data={ data } />, document.getElementById("app"));
