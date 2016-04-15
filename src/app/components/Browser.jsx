import React from "react";
import Version from "./Version.jsx";
import "../styles/Browser.scss";
import "../styles/common.scss";

class Browser extends React.Component {
  render() {
    let versions = this.props.versions.map((version) => {
      return (
        <Version label={ version.label } percentage={ version.percentage } />
      );
    });

    return (
      <div className="Browser">
        <div className="Browser__total">
          <h4>
            { this.props.name }
            <span className="badge badge--total">{ this.props.percentage }%</span>
          </h4>
        </div>
        <div className="Browser__versions">
          { versions }
        </div>
      </div>
    );
  }
}

export default Browser;
