// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);

// module.exports = (async () => {
//     let defaultConfig = await getDefaultConfig(__dirname);
  
//     return {
//       resolver: {
//         assetExts: [...defaultConfig.resolver.assetExts, 'css', 'js'],
//       },
//     };
//   })();
