config = {}
config.context = __dirname

config.entry =
  main: './main.coffee'

config.resolve =
  modulesDirectories: ['node_modules', 'bower_components']
  extensions: ['', '.json']

config.module =
  loaders: [
    test: /\.json$/
    loader: 'json'
  ]

module.exports = config
