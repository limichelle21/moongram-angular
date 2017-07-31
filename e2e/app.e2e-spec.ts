import { MoongramAngularPage } from './app.po';

describe('moongram-angular App', () => {
  let page: MoongramAngularPage;

  beforeEach(() => {
    page = new MoongramAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
