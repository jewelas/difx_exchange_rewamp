import { Story, Meta } from "@storybook/react";
import { CountrySelect, CountrySelectProps } from ".";

export default {
  component: CountrySelect,
  title: "Module/CountrySelect",
} as Meta;

const Template: Story<CountrySelectProps> = (args) => {
  return (
    <div>
      <h2>CountrySelect</h2>
      <div
        style={{
          fontSize: "12px",
          display: "inline-block",
          border: "solid 1px #ccc",
          padding: "5px",
        }}
      >
        {`import { CountrySelect } from @difx/core-ui`}
      </div>
      <div style={{ marginTop: 20 }}>
        <CountrySelect {...args} />
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  onChange: (value) => {
    console.log("Selected: " + value);
  },
  width: 300,
  placeHolder: "Select...",
  type: "name",
};
