const { override, addBabelPreset, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPreset('@babel/preset-react'),
  addBabelPlugin('@babel/plugin-syntax-jsx')
);
