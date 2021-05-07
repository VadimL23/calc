import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Title, ITitle } from './Title';

export default {
  title: 'baseComponents/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ITitle> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  classnames: "text-center",
  title: "Калькулятор неустоек",
};

export const Secondary = Template.bind({});
Secondary.args = {
    classnames:"text-secondary",
    title: 'Button',
};

export const Therdary = Template.bind({});
Therdary.args = {
    classnames:"bg-danger",
    title: 'Калькулятор',
};

export const Large = Template.bind({});
Large.args = {
  
  title: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  title: 'Button',
};
