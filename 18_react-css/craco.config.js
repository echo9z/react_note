const CracoLessPlugin = require("craco-less");
module.exports = {
  // 合并plugins配置
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
              modifyVars: { "@primary-color": "#1DA57A" },
              javascriptEnabled: true
          }
        }
      }
    }
  ],
};