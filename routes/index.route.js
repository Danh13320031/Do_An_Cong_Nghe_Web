import moduleRoute from './module.route.js';

const router = (app) => {
  app.use('/', moduleRoute.homeRoute);
};

export default router;
