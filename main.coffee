module.exports =
  swaggerFiles: require.context './swagger/', true, /^(.*\.(json$))[^.]*$/igm
  apiaryFiles: require.context './apiary/', true, /^(.*\.(json$))[^.]*$/igm