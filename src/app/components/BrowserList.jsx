import React from "react";
import Browser from "./Browser.jsx";

class BrowserList extends React.Component {
  render() {
    let browsers = this.props.data.map((browser) => {
      return (
        <Browser name={ browser.name } percentage={ browser.percentage } versions={ browser.versions } />
      )
    });

    return (
      <div className="BrowserList">
        { browsers }
      </div>
    );
  }
}

export default BrowserList;
