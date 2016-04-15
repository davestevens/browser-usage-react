import React from "react";
import Version from "./Version.jsx";
import "../styles/Browser.scss";
import "../styles/common.scss";

class Browser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  toggleBrowser() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    let versions = this.props.versions.map((version) => {
      let isCurrent = [].concat(version.index).indexOf(0) != -1;
      return (
        <Version label={ version.label } percentage={ version.percentage } current={ isCurrent }/>
      );
    });

    return (
      <div className={this.state.expanded ? "Browser expanded" : "Browser"} onClick={ this.toggleBrowser.bind(this) }>
        <div className="Browser__total">
          <h4>
            { this.props.name }
            <span className="badge badge--total">{ this.props.percentage.toFixed(2) }%</span>
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
