const rootMain = require("../../../.storybook/main");

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: "webpack5" },

  stories: [
    ...rootMain.stories,
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    ...rootMain.addons,
    "@nrwl/react/plugins/storybook",
    "storybook-addon-jotai",
    "storybook-axios"
  ],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
  previewHead: (head) => `
  ${head}
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet"></link>
  `,

  env: (config) => ({
    ...config,
    NX_API_URL : "https://test-api.difx.com",
    NX_WS_URL : "wss://test-api.difx.com",
    NX_GOOGLE_CAPTCHA_URL : "https://www.google.com/recaptcha/api.js?render=6Lc_bTocAAAAAEdBFuwabJr5of-6kdhfZW4aag3E&trustedtypes=true",
    NX_GOOGLE_CAPTCHA_ID : "6Lc_bTocAAAAAEdBFuwabJr5of-6kdhfZW4aag3E",
    NX_GEETEST_CAPTCHA_URL : "https://static.geetest.com/v4/gt4.js",
    NX_GEETEST_CAPTCHA_ID : "ffe1b419b7c76cf878220ed23a6eeec3"
  }),
};
