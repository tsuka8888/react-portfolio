import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomeContent } from './HomeContent';

export default {
  title: 'organisms/HomeContent',
  component: HomeContent,
} as ComponentMeta<typeof HomeContent>;

const Template: ComponentStory<typeof HomeContent> = () => <HomeContent />;

export const Default = Template.bind({});
