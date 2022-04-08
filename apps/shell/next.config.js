// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withLess = require("next-with-less");
const path = require("path");

const pathToDefaultLessFile = path.resolve(
  "./apps/shell/themes/default.less"
);

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  generateBuildId: () => 'build',
  lessLoaderOptions: {
    // /* ... */
    additionalData: (content) =>
      `${content}\n\n@import '${pathToDefaultLessFile}';`,
    },
};

module.exports = withNx(withLess(nextConfig));
