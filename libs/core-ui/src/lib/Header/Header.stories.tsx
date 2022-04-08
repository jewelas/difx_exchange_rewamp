import { Story, Meta } from '@storybook/react';
import { withJotai } from 'storybook-addon-jotai';
import { HeaderProps, Header, themeAtom } from '.';

export default {
  component: Header,
  title: 'Module/Header',
  decorators: [withJotai],
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.parameters = {
  jotai: {
    atoms: {
      theme: themeAtom,
    },
    values: {
      theme: 'light',
    },
  },
};

Primary.args = {
  onNavigation: (page: string) => {console.log('onNavigation')},
  onChangeTheme: () => {console.log('onChangeTheme')},
};
