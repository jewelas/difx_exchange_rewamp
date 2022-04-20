import { Story, Meta } from "@storybook/react";
import { PasswordField, PasswordFieldProps } from ".";

export default {
  component: PasswordField,
  title: "Core/PasswordField",
} as Meta;

const Template: Story<PasswordFieldProps> = (args) => {
  return (
    <div>
      <h2>PasswordField</h2>
      <div
        style={{
          fontSize: "12px",
          display: "inline-block",
          border: "solid 1px #ccc",
          padding: "5px",
        }}
      >
        {`import { PasswordField } from @difx/core-ui`}
      </div>
      <div style={{ marginTop: 20 }}>
        <div style={{ marginLeft: 300, width: 300 }}>
          <PasswordField {...args} />
        </div>
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  onChange: () => {
    console.log("onchangepass");
  },
};
