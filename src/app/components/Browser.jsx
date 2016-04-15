import React from "react";
import Version from "./Version.jsx";
import "../styles/Browser.scss";
import "../styles/common.scss";

class Browser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <div className={this.state.expanded ? "Browser expanded" : "Browser"} onClick={ this._handleExpandBrowser.bind(this) }>
        <div className="Browser__total" style={ { "background-color": this.props.colour } }>
          <h4>
            { this.props.name }
            <span className="badge badge--total">{ this.props.percentage.toFixed(2) }%</span>
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
    this.props.onUpdate(index, state);
  }

  _handleExpandBrowser() {
    this.setState({ expanded: !this.state.expanded });
  }
}

export default Browser;
