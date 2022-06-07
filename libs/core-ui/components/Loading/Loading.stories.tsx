import { Story, Meta } from "@storybook/react";
import Loading from '.';
export default {
  component: Loading,
  title: "Core/Loading",
} as Meta;

const Template: Story = (args) => {
  return (
    <div>
      <h2>Loading</h2>
      <div
        style={{
          fontSize: "12px",
          display: "inline-block",
          border: "solid 1px #ccc",
          padding: "5px",
        }}
      >
        {`import { Loading } from @difx/core-ui`}
      </div>
      <div style={{ width: 300, marginTop: 20 }}>
        <Loading {...args} />
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  style: { width: 500, height:300 },
  row:3,
  column: 5,
  flexGrowForColumns: [2,1,1,1,1],
  hideColumns: []
};
