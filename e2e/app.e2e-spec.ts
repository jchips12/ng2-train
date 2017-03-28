import { Ng2TrainPage } from './app.po';

describe('ng2-train App', () => {
  let page: Ng2TrainPage;

  beforeEach(() => {
    page = new Ng2TrainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
