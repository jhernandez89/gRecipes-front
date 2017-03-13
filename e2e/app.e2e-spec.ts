import { BootstrapTestPage } from './app.po';

describe('bootstrap-test App', () => {
  let page: BootstrapTestPage;

  beforeEach(() => {
    page = new BootstrapTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
