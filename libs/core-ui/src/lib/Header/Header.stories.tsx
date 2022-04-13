import { Story, Meta } from '@storybook/react';
import { withJotai } from 'storybook-addon-jotai';
import 'antd/dist/antd.css';
import { HeaderProps, Header, themeAtom, currentUserAtom } from '.';

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
      currentUserAtom: currentUserAtom
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
