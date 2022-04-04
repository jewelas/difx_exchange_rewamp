import { Story, Meta } from '@storybook/react';
import {Typography, TypographyProps } from '.';


export default {
    component: Typography,
    title: 'Core/Typography',
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'This is sample test for Typography'
};