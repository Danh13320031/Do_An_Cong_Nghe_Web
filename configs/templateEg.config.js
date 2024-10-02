import ejs from 'ejs';

const templateEg = (app) => {
  app.set('views', './views');
  app.set('view engine', 'ejs');
  ejs.delimiter = '%';
};

export default templateEg;
