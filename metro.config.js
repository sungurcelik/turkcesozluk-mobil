// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [
      'bin',
      'png',
      'jpg',
      'jpeg',
      'gif',
      'bmp',
      'svg',
      'otf',
      'ttf',
      'wav',
      'mp4',
      'm4a',
      'aac',
      'aac',
      '3gp',
    ],
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'cjs', 'svg'], // SVG uzantısını buraya ekleyin
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
