import { Story, Meta } from "@storybook/react";
import { Typography, TypographyProps } from ".";

export default {
  component: Typography,
  title: "Core/Typography",
} as Meta;

const Template: Story<TypographyProps> = (args) => {
  return (
    <div>
      <h2>Typography</h2>
      <div
        style={{
          fontSize: "12px",
          display: "inline-block",
          border: "solid 1px #ccc",
          padding: "5px",
        }}
      >
        {`import { Typography } from @difx/core-ui`}
      </div>
      <div style={{ marginTop: 20 }}>
        <Typography {...args} />
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: "This is sample test",
};
