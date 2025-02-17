import type { StoryObj } from "@storybook/react";

import CustomButton from "./CustomButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: CustomButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "destructive",
    size: "lg",
  },
};
