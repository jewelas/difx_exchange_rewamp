/* eslint-disable @typescript-eslint/no-explicit-any */
import { Story, Meta } from "@storybook/react";
import { light, dark } from "./../../themes/themes"

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

  const keys = ["color", "background", "fontColor"];

  const renderItems = (theme: any, key: string) => {
    const result = [];
    const background = Object.keys(theme[key]);
    background.map(e => {
      const background = theme[key][e];
      if (!background.includes("#") && !background.includes("rgb")) return null;
      if (background.length > 15) return null;
      const color = wc_hex_is_light(background) || background.includes("#fff") ? "#000" : "#fff";
      result.push(
        <div key={`${key}_${e}`} style={{ textAlign: "center", padding: 10, border: "solid 1px #ccc", width: 200, marginBottom: 10, marginRight: 10, background, color: color }}>{`${e}: ${background}`}</div>
      )
    });
    return result;
  }

  return (
    <div>
      <h2>Colors</h2>

      <div style={{ fontWeight: 600, fontSize: 19, margin: "10px 0px 5px 0px" }}>In Light Mode</div>
      <div>
      {
          keys.map(e => (
            <div key={`item_light_${e}`} >
              <div style={{ fontWeight: 600, fontSize: 15 }}>{e}</div>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "10px",
              }}>

                {renderItems(dark, e)}
              </div>
            </div>
          ))
        }
      </div>


      <div style={{ marginTop:10, fontWeight: 600, fontSize: 25, margin: "20px 10px 5px 0px" }}>In Dark Mode</div>
      <div>
        {
          keys.map(e => (
            <div key={`item_dark_${e}`} >
              <div style={{ fontWeight: 600, fontSize: 15 }}>{e}</div>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
              }}>

                {renderItems(dark, e)}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
