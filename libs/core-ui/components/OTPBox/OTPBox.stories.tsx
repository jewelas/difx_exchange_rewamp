import { Story, Meta } from "@storybook/react";
import { OTPBox, OTPBoxInterface } from '.';
export default {
  component: OTPBox,
  title: "Module/OTPBox",
} as Meta;

const Template: Story<OTPBoxInterface> = (args) => {
  return (
    <div>
      <h2>OTPBox</h2>
      <div
        style={{
          fontSize: "12px",
          display: "inline-block",
          border: "solid 1px #ccc",
          padding: "5px",
        }}
      >
        {`import { OTPBox } from @difx/core-ui`}
      </div>
      <div style={{ width: 500, marginTop: 20 }}>
        <OTPBox {...args} />
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  value: "123456",
  numInputs: 6,
  handleChange: (value: any) => { console.log(value) },
};
