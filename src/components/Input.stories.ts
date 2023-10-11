import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "form/Input",
  tags: ["autodocs"],
  argTypes: {
    initialValue: {
      type: "string",
    },
    placeholder: {
      type: "string",
    },
  },
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const InitialValue: Story = {
  args: {
    initialValue: "hello",
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "input something",
  },
};
