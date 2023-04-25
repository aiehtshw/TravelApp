function babelConfig(api) {
  if (api) {
    api.cache(false);
  }

  const presets = ['module:metro-react-native-babel-preset'];
  /*
  const plugins = [
    [
      'module-resolver',
      {
        alias:{
          "@redux/*": "./src/redux/*",
          "@config/*": "./src/config/*",
          "@utils/*": ["./src/utils/*"],
          "@navigator/*": ["./src/navigator/*"],
          "@images/*": ["./assets/images/*"],
          "@services/*": ["./src/services/*"],
          "@screens/*": ["./src/screens/*"],
          "@components/*": ["./src/components/*"],


          "@redux": "./src/redux",
          "@config": "./src/config",
          "@utils": ["./src/utils"],
          "@navigator": ["./src/navigator"],
          "@images": ["./assets/images"],
          "@services": ["./src/services"],
          "@screens": ["./src/screens"],
          "@components": ["./src/components"],
        },
        cwd: 'babelrc'
      }
    ]
  ];*/

  const plugins = [
    [
      'babel-plugin-root-import',
      {
        "paths": [
          {
            "rootPathPrefix": "~",
            "rootPathSuffix": "src"
          },
          {
            "rootPathPrefix": "#",
            "rootPathSuffix": "assets"
          }
        ]
      },
    ],
  ];

  return {
    presets,
    plugins
  };
}

module.exports = babelConfig;

