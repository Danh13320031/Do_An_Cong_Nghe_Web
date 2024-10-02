import express from 'express';
import reload from 'reload';
import environmentVariable from './configs/env.config.js';
const app = express();

app.get('/', (request, response, next) => {
  response.send('<h1> Hello World! </h1>');
});

reload(app)
  .then(() => {
    app.listen(environmentVariable.port, environmentVariable.hostname, () => {
      console.log(
        `Start Server: http://${environmentVariable.hostname}:${environmentVariable.port}`
      );
    });
  })
  .catch((error) => {
    console.log('Reload Fail: ', error);
  });
