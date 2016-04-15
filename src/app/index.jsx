import React from "react";
import { render } from "react-dom";
import "./styles/BrowserUsage.scss";
import BrowserList from "./components/BrowserList.jsx";
import { Pie } from "react-chartjs";
import data from "./services/data";

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  segmentStrokeWidth: 0.1,
  animateScale: true,
  animateRotate: true
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._buildState(props.data.data, props);
  }

  render () {
    return (
      <div>
        <nav>
          <div className="content">Browser Usage</div>
        </nav>
        <div className="content">
          <div className="chartContainer">
            <Pie data={ this.state.chartData } options={ chartOptions } width="750" height="600" />
          </div>
          <div className="browserList">
            <BrowserList data={ this.state.data } onBrowserUpdate={ this._handleBrowserUpdate.bind(this) } />
          </div>
        </div>
      </div>
    );
  }

  _handleBrowserUpdate(browser, browserIndex) {
    let stateData = this.state.data;
    stateData[browserIndex] = browser;
    this.setState(this._buildState(stateData, this.props));
  }

  _buildState(newData, props) {
    return {
      data: newData,
      chartData: props.data.formatChartData(newData)
    };
  }
}

render(<App data={ data } />, document.getElementById("app"));
