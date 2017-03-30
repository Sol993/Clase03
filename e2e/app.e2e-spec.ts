import { Clase03Page } from './app.po';

describe('clase03 App', function() {
  let page: Clase03Page;

  beforeEach(() => {
    page = new Clase03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
