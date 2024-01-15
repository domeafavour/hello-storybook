import { Meta, StoryObj } from '@storybook/react';
import { UseCounter } from './useCounter';

const meta: Meta<typeof UseCounter> = {
  title: 'hooks/useCounter',
  tags: ['autodocs'],
  component: UseCounter,
};

export default meta;

type Story = StoryObj<typeof UseCounter>;

const defaultCode = `
function DefaultStory(args: Story) {
  const [count, { increment }] = useCounter();
  return (
    <button type="button" onClick={increment}>
      {count}
    </button>
  );
}
`;

const initialCount3Code = `
function InitialCount3Story() {
  const [count, { increment }] = useCounter(3);
  return (
    <button type="button" onClick={increment}>
      {count}
    </button>
  );
}
`;

export const Default: Story = {
  args: {
    initialCount: 0,
  },
  parameters: {
    docs: {
      source: {
        // set language to jsx
        language: 'jsx',
        code: defaultCode,
      },
    },
  },
};

export const InitialCount3: Story = {
  args: {
    initialCount: 3,
  },
  parameters: {
    docs: {
      source: {
        // set language to jsx
        language: 'jsx',
        code: initialCount3Code,
      },
    },
  },
};
