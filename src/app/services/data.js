import data from "../data.json";
import CombineVersion from "./CombineVersion";

const THRESHOLD = 1;

function reduceVersions(versions) {
  let combinedVersions = [],
      combinedVersion = new CombineVersion();
  versions.forEach((version) => {
    if (version.percentage < THRESHOLD) {
      combinedVersion.add(version);
    }
    else {
      if (combinedVersion.any()) {
        combinedVersions.push(combinedVersion.build());
      }
      combinedVersions.push(version);
    }
  });
  if (combinedVersion.any()) {
    combinedVersions.push(combinedVersion.build());
  }
  return combinedVersions.map((v) => {
    v.active = true;
    return v;
  });
}

function totalPercentage(versions) {
  return versions.reduce(((memo, v) => memo + v.percentage), 0);
}

function formatData(data) {
  return data
    .map((datum) => {
      datum.versions = reduceVersions(datum.versions);
      datum.percentage = totalPercentage(datum.versions);
      return datum;
    })
    .sort((a, b) => b.percentage - a.percentage);
}

function formatChartData(data) {
  let versions = [],
      unsupported = 0,
      total = 0;
  data.forEach((browser) => {
    browser.versions.forEach((version) => {
      total += version.percentage;
      if (!version.active) {
        unsupported += version.percentage;
      }
      versions.push({
        value: version.active ? version.percentage.toFixed(2) : 0,
        color: browser.colour,
        highlight: browser.highlight,
        label: `${browser.name} - ${version.label}`
      });
    });
  });
  versions.push({
    value: unsupported.toFixed(2),
    color: "rgba(0, 0, 0, 0.4)",
    highlight: "rgba(0, 0, 0, 0.25)",
    label: "Unsupported Browser"
  });
  versions.push({
    value: (100 - total).toFixed(2),
    color: "rgba(0, 0, 0, 0.75)",
    highlight: "rgba(0, 0, 0, 0.5)",
    label: "Unknown Browser"
  });
  return versions;
}

export default {
  data: formatData(data),
  formatData: formatData,
  formatChartData: formatChartData
}
