const { getJestProjects } = require("@nrwl/jest");

module.exports = {
  projects: getJestProjects(),
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
