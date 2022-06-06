import { Story, Meta } from "@storybook/react";
import TrendChart, { TrendChartProps } from '.';
export default {
  component: TrendChart,
  title: "Core/TrendChart",
} as Meta;

const Template: Story<TrendChartProps> = (args) => {
  return (
    <div>
      <h2>TrendChart</h2>
      <div
        style={{
          fontSize: "12px",
          display: "inline-block",
          border: "solid 1px #ccc",
          padding: "5px",
        }}
      >
        {`import { TrendChart } from @difx/core-ui`}
      </div>
      <div style={{ width: 300, marginTop: 20 }}>
        <TrendChart {...args} />
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  data: [20, 15, 10, 12, 9, 30, 40, 43, 35, 25, 12, 19, 8, 10, 40, 45, 32, 19],
  width:300,
  height:150,
  lineColor: '#DC3545',
  backgroundColor: '#DC3545',
  gradientHeight: 90
};
