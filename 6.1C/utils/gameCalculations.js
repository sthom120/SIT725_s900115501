const calculateAveragePlayTime = (minMinutes, maxMinutes) => {
  if (typeof minMinutes !== "number" || typeof maxMinutes !== "number") {
    throw new TypeError("Play times must be numbers");
  }

  if (minMinutes < 0 || maxMinutes < 0) {
    throw new RangeError("Play times cannot be negative");
  }

  if (minMinutes > maxMinutes) {
    throw new RangeError(
      "Minimum play time cannot be greater than maximum play time"
    );
  }

  return (minMinutes + maxMinutes) / 2;
};

module.exports = {
  calculateAveragePlayTime
};