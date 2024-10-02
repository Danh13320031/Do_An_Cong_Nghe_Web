import express from 'express';
import reload from 'reload';
import environmentVariable from './configs/env.config.js';
import templateEg from './configs/templateEg.config.js';
import router from './routes/index.route.js';
const app = express();

templateEg(app);
router(app);

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
