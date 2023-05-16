import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Home } from './Home';

export default {
  title: 'organisms/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
