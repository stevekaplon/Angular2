import { Ng4ScssRoutingPage } from './app.po';

describe('ng4-scss-routing App', () => {
  let page: Ng4ScssRoutingPage;

  beforeEach(() => {
    page = new Ng4ScssRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
