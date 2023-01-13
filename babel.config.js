module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@redux': './src/redux',
          '@services': './src/services',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@i18n': './src/i18n',
          '@lib': './src/lib',
          '@interfaces': './src/interfaces',
        },
      },
    ],
  ],
};
