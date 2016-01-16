require 'auto-config-fake-server'

swaggerFiles = require.context './swagger/', true, /^(.*\.(json$))[^.]*$/igm
apiaryFiles  = require.context './apiary/', true, /^(.*\.(json$))[^.]*$/igm

AutoConfigFakeServer.init()

AutoConfigFakeServer.fakeServer.autoRespond = true

fixtures = []

for path in swaggerFiles.keys()
  fixtures.push swaggerFiles(path)

for path in apiaryFiles.keys()
  fixtures.push apiaryFiles(path)

AutoConfigFakeServer.consume fixtures

token = '"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS50b3Bjb2Rlci1kZXYuY29tIiwiZXhwIjoxNDMzMjcxNzYwLCJ1c2VySWQiOiIyMzA2MTQwNSIsImlhdCI6MTQzMzI3MTE2MCwianRpIjoiMDZhNzVjM2EtMTQ0MC00MWE3LTk5N2YtZmFmMGVjZjFmOGM1In0.N3ubXTH6jnM3QoDm0qubYYrOVqx3unE_fz5La6lgbMI"'

refreshToken = '"dGjFxqWsIXqptI2JllnmactleKODbd3UqWAvdjpjHsNqQ"'

localStorage.setItem 'userJWTToken', token

localStorage.setItem 'userRefreshJWTToken', token
