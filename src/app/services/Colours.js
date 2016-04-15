class Colours {
  constructor({ count = 10, saturation = 70, lightness = 60 } = {}) {
    this.count = count;
    this.saturation = saturation;
    this.lightness = lightness;
  }

  create(index, { count = this.count, alpha = 1 } = {}) {
    let hue = index * (360 / count);
    return `hsla(${hue}, ${this.saturation}%, ${this.lightness}%, ${alpha})`
  }
}

export default Colours
