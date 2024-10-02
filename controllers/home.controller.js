const home = (request, response) => {
  response.render('./pages/index.view.ejs', {
    pageTitle: 'Trang chủ',
  });
};

const homeController = {
  home,
};

export default homeController;
