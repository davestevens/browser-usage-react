import React from "react";
import "../styles/Version.scss";

class Version extends React.Component {
  render() {
    return (
      <label className="Version">
        { this.props.label }
        <input type="checkbox" className="Version__checkbox" />
        <span className="Version__badge">{ this.props.percentage }%</span>
      </label>
    );
  }
}

export default Version;
