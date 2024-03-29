
import type { Meta, StoryObj } from '@storybook/react';

import { About } from '../../components/recipes/About';

const meta: Meta<typeof About> = {
  title: 'About',
  component: About,
};

export default meta;
type Story = StoryObj<typeof About>;

export const Primary: Story = {
  render: () => <About />,
};
