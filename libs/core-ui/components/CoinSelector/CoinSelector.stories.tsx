import { Story, Meta } from "@storybook/react";
import { CoinSelector, CoinSelectorInterface } from '.';
export default {
  component: CoinSelector,
  title: "Module/CoinSelector",
} as Meta;

const Template: Story<CoinSelectorInterface> = (args) => {
  return (
    <div>
      <h2>CoinSelector</h2>
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
        <CoinSelector {...args} />
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  selectedCoin:"USDT"
};
