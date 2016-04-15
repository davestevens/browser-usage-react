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
  return combinedVersions;
}

function totalPercentage(versions) {
  return versions.reduce(((memo, v) => memo + v.percentage), 0);
}

function formatData(data) {
  return data
    .map((datum) => {
      datum.versions = reduceVersions(datum.versions);
      datum.percentage = totalPercentage(datum.versions)
      return datum;
    })
    .sort((a, b) => b.percentage - a.percentage);
}

export default formatData(data);
