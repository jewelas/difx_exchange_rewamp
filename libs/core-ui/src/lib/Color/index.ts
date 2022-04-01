import * as colors from '@ant-design/colors';

const expandColors = colors

// Steps to define and using color constants
// 1. Add new variable in colors.d.ts file
// 2. Assign your color
// 3. Refrence on storybook to know how to use : http://localhost:4400/?path=/story/core-color--primary
expandColors.red.failure = '#DB5354';
expandColors.green.success = '#21C198';

export default expandColors;