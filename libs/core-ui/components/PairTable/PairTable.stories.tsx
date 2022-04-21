import { Story, Meta } from "@storybook/react";
import { PairTable, PairTableProps } from ".";
import { PairType } from "./../../../../shared/type/Pair";

export default {
  component: PairTable,
  title: "Module/PairTable",
} as Meta;

const pairs: PairType[] = [
  {
    symbol: "BNBUSDT",
    order: 6,
    currency1: "BNB",
    currency2: "USDT",
    status: "trading",
    tags: ["bnb", "usdt", "stable"],
    mfee: 0.1,
    tfee: 0.1,
    group_precision: 1,
    liq: 1,
    bamount: 3,
    open: 439.8,
    high: 441.6,
    low: 430.1,
    last: 437.4,
    volume: 36445.639,
    quote_volume: 15886611.3103,
    highest_bid: 441,
    lowest_ask: 430.1,
    pricing: [
      437.4, 439.9, 440.3, 437.3, 437.5, 436.3, 434.5, 435.6, 435.2, 435.1,
      432.8, 433.8, 433.8, 432.9, 430.1, 434.6, 434.4, 438.5, 438.5, 440.2, 438,
      436.9, 436.9, 439.8,
    ],
  },
  {
    symbol: "LTCUSDT",
    order: 8,
    currency1: "LTC",
    currency2: "USDT",
    status: "trading",
    tags: ["ltc", "usdt", "stable"],
    mfee: 0.1,
    tfee: 0.1,
    group_precision: 1,
    liq: 1,
    bamount: 3,
    open: 132.2,
    high: 132,
    low: 127.6,
    last: 129.8,
    volume: 125598.687,
    quote_volume: 16322011.0717,
    highest_bid: 131.7,
    lowest_ask: 127.6,
    pricing: [
      129.8, 131.1, 131.4, 130.3, 130.2, 130.1, 129.4, 130.1, 130, 129.9, 128.9,
      129.3, 130.3, 128.8, 127.6, 129.5, 129.8, 131.2, 131, 131.7, 131.4, 131.1,
      131.7, 132.2,
    ],
  },
];

const Template: Story<PairTableProps> = (args) => <PairTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pairs,
};
