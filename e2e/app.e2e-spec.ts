import { AngularCheckbookPage } from './app.po';

describe('angular-checkbook App', () => {
  let page: AngularCheckbookPage;

  beforeEach(() => {
    page = new AngularCheckbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
