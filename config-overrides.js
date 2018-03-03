const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // Import only needed components
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config);

  // Import only needed components styles and custom ant theme
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": '#f45042',
      "@secondary-color": '#f49542',
      "@accent-color": '#82B1FF',
      "@error-color": '#FF5252',
      "@info-color": '#2196F3',
      "@success-color": '#4CAF50',
      "@warning-color": '#FFC107'
    },
  })(config, env);
  return config;
};