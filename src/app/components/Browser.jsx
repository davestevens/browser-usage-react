import React from "react";
import Version from "./Version.jsx";
import "../styles/Browser.scss";
import "../styles/common.scss";

class Browser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      percentage: this._calculatePercentage()
    };
  }

  render() {
    return (
      <div className={this.state.expanded ? "Browser expanded" : "Browser"} onClick={ this._handleExpandBrowser.bind(this) }>
        <div className="Browser__total">
          <h4>
            { this.props.name }
            <span className="badge badge--total">{ this.state.percentage.toFixed(2) }%</span>
          </h4>
        </div>
        <div className="Browser__versions">
          { this._renderVersions() }
        </div>
      </div>
    );
  }

  _renderVersions() {
    return this.props.versions.map((version, index) => {
      let isCurrent = [].concat(version.index).indexOf(0) != -1;
      return (
        <Version label={ version.label }
                 percentage={ version.percentage }
                 active={ version.active }
                 current={ isCurrent }
                 onUpdate={ this._handleVersionUpdate.bind(this, index) }
        />
      );
    });
  }

  _handleVersionUpdate(index, state) {
    this.props.versions[index].active = state;
    this.setState({ percentage: this._calculatePercentage() });
  }

  _handleExpandBrowser() {
    this.setState({ expanded: !this.state.expanded });
  }

  _calculatePercentage() {
    return this.props.versions
               .filter((v) => v.active)
               .reduce(((memo, v) => memo + v.percentage), 0);
  }
}

export default Browser;
