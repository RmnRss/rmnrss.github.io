module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  webpack(config, options) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      loader: "@svgr/webpack",
      options: {
        ...options,
        icon: true,
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    })

    return config
  },
}
