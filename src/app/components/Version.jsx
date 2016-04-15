import React from "react";
import "../styles/Version.scss";

class Version extends React.Component {
  render() {
    return (
      <label className="Version">
        { this.props.label }
        <input type="checkbox" className="Version__checkbox" checked={ this.props.active ? "checked" : null } onChange={ this._handleClick.bind(this) } />
        <span className={ this.props.current ? "Version__badge Version__badge--current" : "Version__badge" }>
          { this.props.percentage.toFixed(2) }%
        </span>
      </label>
    );
  }

  _handleClick(e) {
    this.props.onUpdate(e.target.checked);
  }
}

export default Version;
