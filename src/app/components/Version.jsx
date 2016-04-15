import React from "react";
import "../styles/Version.scss";

class Version extends React.Component {
  render() {
    return (
      <label className="Version">
        { this.props.label }
        <input type="checkbox" className="Version__checkbox" />
        <span className={ this.props.current ? "Version__badge Version__badge--current" : "Version__badge" }>
          { this.props.percentage.toFixed(2) }%
        </span>
      </label>
    );
  }
}

export default Version;
