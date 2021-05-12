import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Form_calc, TForm_calc } from './Form';

export default {
  title: 'baseComponents/Form',
  component: Form_calc,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
     args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
} as Meta;

const Template: Story<TForm_calc> = (args) => <Form_calc {...args} />;

export const Primary = Template.bind({});
Primary.args = {
//  classnames: "text-center",
//  title: "Калькулятор неустоек",
};

