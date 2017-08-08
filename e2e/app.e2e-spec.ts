import { BMIPage } from './app.po';

describe('bmi App', function() {
  let page: BMIPage;

  beforeEach(() => {
    page = new BMIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
