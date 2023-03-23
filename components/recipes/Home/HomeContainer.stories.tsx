import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomeContainer } from './HomeContainer';

export default {
  title: 'organisms/HomeContainer',
  component: HomeContainer,
} as ComponentMeta<typeof HomeContainer>;

const Template: ComponentStory<typeof HomeContainer> = (args) => (
  <HomeContainer {...args} />
);

export const Default = Template.bind({});
