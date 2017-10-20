import { MEC.TaxModel.UIPage } from './app.po';

describe('mec.tax-model.ui App', () => {
  let page: MEC.TaxModel.UIPage;

  beforeEach(() => {
    page = new MEC.TaxModel.UIPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
