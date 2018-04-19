/* COLOURS */

export const COLOR_PRIMARY = "#FFB677";
export const COLOR_SECONDARY = "#2FD8F9";
export const COLOR_SUCCESS = "#2FF9D7";
export const COLOR_DANGER = "#FF4181";
export const COLOR_CARBON = "#1E2133";
export const COLOR_NIGHTSKY = "#554F64";
export const COLOR_DAWN = "#6C7297";
export const COLOR_ALUMINUM = "#EDEDED";
export const COLOR_DARK_METAL = "#737373";
export const COLOR_SAND = "#F9F7F9";

export const COLOR_PRIMARY_HIGHLIGHT = "#FFC38F";
export const COLOR_SECONDARY_HIGHLIGHT = "#77E9FF";
export const COLOR_SUCCESS_HIGHLIGHT = "#8BF9E7";
export const COLOR_DANGER_HIGHLIGHT = "#FF8FB5";
export const COLOR_NIGHTSKY_HIGHLIGHT = "#8F87A1";
export const COLOR_DAWN_HIGHLIGHT = "#A3AAD4";

/* GRADIENTS */

export const GRADIENT_PRIMARY = `linear-gradient(to top, ${COLOR_PRIMARY}, ${COLOR_PRIMARY_HIGHLIGHT})`;
export const GRADIENT_SECONDARY = `linear-gradient(to top, ${COLOR_SECONDARY}, ${COLOR_SECONDARY_HIGHLIGHT})`;
export const GRADIENT_SUCCESS = `linear-gradient(to top, ${COLOR_SUCCESS}, ${COLOR_SUCCESS_HIGHLIGHT})`;
export const GRADIENT_DANGER = `linear-gradient(to top, ${COLOR_DANGER}, ${COLOR_DANGER_HIGHLIGHT})`;

export const linearGradient = (direction, color1, color2) => {
  return `linear-gradient(to ${direction}, ${color1}, ${color2}`;
};
