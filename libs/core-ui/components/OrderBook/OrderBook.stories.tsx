import { Meta, Story } from "@storybook/react";
import { OrderBook, OrderBookProps } from ".";

export default {
  component: OrderBook,
  title: "Module/OrderBook",
} as Meta;

const Template: Story<OrderBookProps> = (args) => <OrderBook {...args} />;

export const Primary = Template.bind({});
Primary.parameters = {};

Primary.args = {};
