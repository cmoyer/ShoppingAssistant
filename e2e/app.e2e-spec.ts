import { ShoppingAssistantPage } from './app.po';

describe('shopping-assistant App', () => {
  let page: ShoppingAssistantPage;

  beforeEach(() => {
    page = new ShoppingAssistantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
