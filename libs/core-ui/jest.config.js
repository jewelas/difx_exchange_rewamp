module.exports = {
  displayName: "core-ui",
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/libs/core-ui",
  setupFilesAfterEnv: ["./../../jest.setup.ts"],
};

process.env = Object.assign(process.env, {
  NX_API_URL : 'https://apptest-api-v2.difx.io',
  NX_WS_URL : 'wss://apptest-api-v2.difx.io'
});
