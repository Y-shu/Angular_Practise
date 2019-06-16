import { PuttingThingsTogetherPage } from './app.po';

describe('putting-things-together App', function() {
  let page: PuttingThingsTogetherPage;

  beforeEach(() => {
    page = new PuttingThingsTogetherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
