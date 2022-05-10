// import * as colors from "@ant-design/colors";

// const Color = colors;
const Color = {
  red: {failure:"#DB5354"},
  green: {success:"#21C198"},
  blue: {primary:"#3D7EFF"},
  grey: {textSecondary:"#939393"}
}

// Steps to define and using color constants
// 1. Add new variable in colors.d.ts file
// 2. Assign your color
// 3. Refrence on storybook to know how to use : http://localhost:4400/?path=/story/core-color--primary
// Color.red?.failure = "#DB5354";
// Color.green?.success = "#21C198";
// Color.grey.secondary = "#f4f5f8";
// Color.grey.linkSecondary = "#9AA5B4";
// Color.grey.textSecondary = "#939393";
// Color.grey.buttonSecondary = "#d9d9d9";
// Color.blue?.primary = "#3D7EFF";

export { Color };
