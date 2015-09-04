(function() {
  var fixture, fixtures, key, ref, token;

  AutoConfigFakeServer.init();

  AutoConfigFakeServer.fakeServer.autoRespond = true;

  fixtures = [];

  ref = window.FIXTURES;
  for (key in ref) {
    fixture = ref[key];
    if (key !== 'apiary/messaging14.json') {
      fixtures.push(fixture);
    }
  }

  AutoConfigFakeServer.consume(fixtures);

  token = '"yyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS50b3Bjb2Rlci1kZXYuY29tIiwiZXhwIjoxNDMzMjcxNzYwLCJ1c2VySWQiOiI0MDEzNTUxNiIsImlhdCI6MTQzMzI3MTE2MCwianRpIjoiMDZhNzVjM2EtMTQ0MC00MWE3LTk5N2YtZmFmMGVjZjFmOGM1In0.okSjl5KOmGQ6hJEoQxk4SVkFra65_Id6KUQGdAVmJNe"';

  localStorage.setItem('userJWTToken', token);

}).call(this);
