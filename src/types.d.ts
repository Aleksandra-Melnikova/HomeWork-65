export interface IPage {
  title: string;
  content: string;
}

export interface IPageAPi {
  [pageName: string]: IPage;
}
