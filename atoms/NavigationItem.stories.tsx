import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavigationItem } from './NavigationItem';

export default {
  title: 'Atoms/NavigationItem',
  component: NavigationItem,
} as ComponentMeta<typeof NavigationItem>;

const Template: ComponentStory<typeof NavigationItem> = (args) => (
  <NavigationItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'ABOUT',
};
