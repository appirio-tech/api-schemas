var token = process.env.APIARY_API_KEY;

if (!token) {
  console.log('No API token found in environment');
  console.log('1. Retrieve your key at https://login.apiary.io/tokens');
  console.log('2. Add the token to your environment:');
  console.log('---');
  console.log('export APIARY_API_KEY=<your_token>');
  console.log('---');
  process.exit();
}

var apiBlueprintToJson = require('api-blueprint-to-json');
var resources = require('./resources').map(function(resource) {
  resource.token = token;
  return resource;
});

function callback(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Finished updating all schemas');
  }
}

apiBlueprintToJson.process(resources, callback);