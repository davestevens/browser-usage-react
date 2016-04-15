import React from "react";
import Browser from "./Browser.jsx";

class BrowserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <div className="BrowserList">
        { this._renderBrowsers() }
      </div>
    );
  }

  _renderBrowsers() {
    return this.state.data.map((browser, index) => {
      return (
        <Browser name={ browser.name }
                 percentage={ browser.percentage }
                 versions={ browser.versions }
                 onUpdate={ this._handleVersionUpdate.bind(this, index) }
        />
      )
    });
  }

  _handleVersionUpdate(browserIndex, versionIndex, state) {
    let browser = this.props.data[browserIndex],
        version = browser.versions[versionIndex];

    version.active = state;
    browser.percentage = browser.versions
                                .filter((v) => v.active)
                                .reduce(((memo, v) => memo + v.percentage), 0);

    this.props.onBrowserUpdate(browser, browserIndex);
  }
}

export default BrowserList;
