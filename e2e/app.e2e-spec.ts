import { DungeonExplorerWebAppPage } from './app.po';

describe('dungeon-explorer-web-app App', () => {
  let page: DungeonExplorerWebAppPage;

  beforeEach(() => {
    page = new DungeonExplorerWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
