import { PrompterPage } from './app.po';

describe('prompter App', () => {
  let page: PrompterPage;

  beforeEach(() => {
    page = new PrompterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
