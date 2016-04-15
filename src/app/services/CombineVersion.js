class CombineVersion {
  constructor(options = {}) {
    this.versions = options.versions || [];
  }

  add(version) {
    this.versions.push(version);
  }

  any() {
    return !!this.versions.length;
  }

  build() {
    if (!this.versions.length) return;
    let version = {
      label: this._label(),
      percentage: this._percentage(),
      index: this._indexes()
    };
    this.versions = [];
    return version;
  }

  _label() {
    let label = this.versions[0].label;
    if (this.versions.length > 1) {
      label += ` - ${this.versions[this.versions.length - 1].label}`;
    }
    return label;
  }

  _percentage() {
    return this.versions.reduce(((memo, v) => memo + v.percentage), 0);
  }

  _indexes() {
    return this.versions.map((v) => v.index);
  }
}

export default CombineVersion;
