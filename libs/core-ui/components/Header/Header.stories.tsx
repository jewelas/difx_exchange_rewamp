import { Meta, Story } from "@storybook/react";
import { Header, HeaderProps } from ".";

export default {
  component: Header,
  title: "Module/Header",
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.parameters = {};

Primary.args = {
  onNavigation: (page: string) => {
    console.log("onNavigation");
  },
};
