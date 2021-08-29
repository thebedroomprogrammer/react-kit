const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = (envVars) => {
  const { env } = envVars
  const configFile = require(`./webpack.${env}.js`)
  const config = merge(common, configFile)
  return config
}
