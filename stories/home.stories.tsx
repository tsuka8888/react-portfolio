import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from '../pages/index';

export default {
  title: 'pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Default = Template.bind({});
