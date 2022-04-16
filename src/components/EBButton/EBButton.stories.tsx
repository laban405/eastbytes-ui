import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import EBButton, { EBButtonProps } from "./EBButton";

export default {
    title: "Components/EBButton",
    component: EBButton,
    argTypes: {
        backgroundColor: { control: 'color' },
      },
} as Meta;

// Create a master template for mapping args to render the EBButton component
const Template: Story<EBButtonProps> = (args) => <EBButton {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, label: "Secondary 😇" };

// export const CustomBackground = Template.bind({});
// CustomBackground.args = { ...Primary.args, primary: false, label: "Secondary 😇", backgroundColor: 'red' };