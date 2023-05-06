export const timeCalculator = (time) => {
  const std = Math.floor(time / 60);
  const min = time - std * 60;

  return [std, min];
};

export const circleColor = (num) => {
  if (num > 8.5) {
    return "#8de110";
  } else if (num > 7) {
    return "#0fa701";
  } else if (num > 6) {
    return "#899802";
  } else if (num > 5) {
    return "#d8ae05";
  } else if (num > 4) {
    return "#d88705";
  } else {
    return "#d84805";
  }
};
