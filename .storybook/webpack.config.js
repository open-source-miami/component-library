module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader")
        },
        { loader: require.resolve("react-docgen-typescript-loader") }
      ]
    },
    // lint
    {
      test: /(\.ts$|\.tsx?$)/,
      exclude: /node_modules/,
      use: ["eslint-loader"]
    }
  );
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
