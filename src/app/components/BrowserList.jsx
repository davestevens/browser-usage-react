import React from "react";
import Browser from "./Browser.jsx";

class BrowserList extends React.Component {
  render() {
    return (
      <div className="BrowserList">
        { this._renderBrowsers() }
      </div>
    );
  }

  _renderBrowsers() {
    return this.props.data.map((browser) => {
      return (
        <Browser name={ browser.name }
                 percentage={ browser.percentage }
                 versions={ browser.versions }
        />
      )
    });
  }
}

export default BrowserList;
