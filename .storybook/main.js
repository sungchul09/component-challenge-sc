const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];
    config.module.rules.push({
        include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias['@'] = rootPath;
    config.resolve.alias['~'] = rootPath;
    return config
  },
}