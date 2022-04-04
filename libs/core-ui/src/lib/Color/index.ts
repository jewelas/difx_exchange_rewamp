import * as colors from '@ant-design/colors';

const Color = colors

// Steps to define and using color constants
// 1. Add new variable in colors.d.ts file
// 2. Assign your color
// 3. Refrence on storybook to know how to use : http://localhost:4400/?path=/story/core-color--primary
Color.red.failure = '#DB5354';
Color.green.success = '#21C198';
Color.grey.secondary = '#f4f5f8';
Color.grey.textSecondary = '#939393';

export {Color}