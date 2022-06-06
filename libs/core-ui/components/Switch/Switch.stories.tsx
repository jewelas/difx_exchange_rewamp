import { Story, Meta } from "@storybook/react";
import Switch, { SwitchProps } from '.';
export default {
    component: Switch,
    title: "Core/Switch",
} as Meta;

const Template: Story<SwitchProps> = (args) => {
    return (
        <div>
            <h2>Switch</h2>
            <div
                style={{
                    fontSize: "12px",
                    display: "inline-block",
                    border: "solid 1px #ccc",
                    padding: "5px",
                }}
            >
                {`import { Switch } from @difx/core-ui`}
            </div>
            <div style={{ width: 300, marginTop: 20 }}>
                <Switch {...args} />
            </div>
        </div>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    tabs: [{value:"1", label:'Tab 1'}, {value:"2", label:'Tab 2'}],
    defaultTab: "1",
    onChange: (value: string) => {console.log("Tab selected:"+value)},
};
