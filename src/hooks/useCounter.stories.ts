import { Meta, StoryObj } from '@storybook/react';
import { UseCounter } from './useCounter';

const meta: Meta<typeof UseCounter> = {
  title: 'hooks/useCounter',
  tags: ['autodocs'],
  component: UseCounter,
};

export default meta;

type Story = StoryObj<typeof UseCounter>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        // set language to jsx
        language: 'jsx',
        code: `
  const [count, { increment, decrement }] = useCounter();
`,
      },
    },
  },
};

export const InitialCount: Story = {
  // name: 'Initial Value',
  args: {
    initialCount: 3,
  },
  parameters: {
    docs: {
      source: {
        // set language to jsx
        language: 'jsx',
        code: `
  const [count, { increment, decrement }] = useCounter(3);
`,
      },
    },
  },
};
