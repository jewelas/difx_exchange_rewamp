/* eslint-disable @typescript-eslint/no-explicit-any */
import { Story, Meta } from "@storybook/react";
import { Color } from ".";

export default {
  title: "Core/Color",
} as Meta;

// https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
function wc_hex_is_light(color: string) {
  if (!color.includes("#")) return false;
  const hex = color.replace("#", "");
  const c_r = parseInt(hex.substr(0, 2), 16);
  const c_g = parseInt(hex.substr(2, 2), 16);
  const c_b = parseInt(hex.substr(4, 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
}

const Template: Story = (args) => {
  const renderColorRange = (name: string, colorsParam: any) => {
    const keys: any = Object.keys(colorsParam);

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontWeight: 600,
            textAlign: "center",
            fontSize: "16px",
            color: "#777",
          }}
        >
          {name}
        </div>
        {keys.map((e: any, i: number) => {
          let colorName = "";
          if (isNaN(parseInt(e))) {
            colorName = e;
          }
          const color = colorsParam[e];
          return (
            <div
              key={`${e}_${i}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 7,
                background: color,
                color:
                  wc_hex_is_light(color) || color.includes("#fff")
                    ? "#000"
                    : "#fff",
              }}
            >
              <div>
                Color.{name}
                {!colorName ? `[${i}]` : `.${colorName}`}
              </div>
              <div>{color}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h2>Colors</h2>
      <div
        style={{
          fontSize: "12px",
          display: "inline-block",
          border: "solid 1px #ccc",
          padding: "5px",
        }}
      >
        {`import { Color } from @difx/core-ui`}
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridGap: "10px 10px",
          gridTemplateColumns: "auto auto auto",
          marginBottom: "50px",
        }}
      >
        {renderColorRange("red", Color["red"])}
        {renderColorRange("volcano", Color["volcano"])}
        {renderColorRange("orange", Color["orange"])}
        {renderColorRange("gold", Color["gold"])}
        {renderColorRange("yellow", Color["yellow"])}
        {renderColorRange("lime", Color["lime"])}
        {renderColorRange("green", Color["green"])}
        {renderColorRange("cyan", Color["cyan"])}
        {renderColorRange("blue", Color["blue"])}
        {renderColorRange("geekblue", Color["geekblue"])}
        {renderColorRange("purple", Color["purple"])}
        {renderColorRange("magenta", Color["magenta"])}
        {renderColorRange("grey", Color["grey"])}
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
