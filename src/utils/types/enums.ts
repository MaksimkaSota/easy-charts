export enum ChartParameter {
  Chart = 'c',
  Width = 'width',
  Height = 'height',
  Background = 'backgroundColor',
  Format = 'format',
  Ratio = 'devicePixelRatio',
}

export enum ChartType {
  Bar = 'bar',
  HBar = 'horizontalBar',
  Line = 'line',
  Radar = 'radar',
  Pie = 'pie',
  Doughnut = 'doughnut',
}

export enum RoutePath {
  NotFound = '*',
  Main = '/',
  Create = '/create',
  Gallery = '/gallery',
  Examples = '/examples',
  Info = '/info',
  Contacts = '/contacts',
  Save = '/save',
}

export enum FieldName {
  Title = 'title',
  Labels = 'labels',
  Datasets = 'datasets',
  Width = 'width',
  Height = 'height',
  BelarusCoin = 'BYN',
  AmericaCoin = 'USD',
  EuropeCoin = 'EUR',
  RussiaCoin = 'RUB',
  UkraineCoin = 'UAH',
  PolandCoin = 'PLN',
  City = 'city',
}

export enum StandardOption {
  Width = 750,
  Height = 450,
}

export enum RequestState {
  Request = 'REQUEST',
  Failure = 'FAILURE',
}

export enum KeyboardEventCode {
  Escape = 'Escape',
}

export enum StatusCode {
  ResponseBadRequest = 400,
  ResponseNotFound = 404,
  GeolocationNetworkError = 2,
  GeolocationTimeoutExpired = 3,
}

export enum AnimationParameter {
  BarAndIndentWidth = 25,
  MaxHeight = 100,
  RedBackground = 'rgb(226, 86, 89)',
  YellowBackground = 'rgb(242, 143, 39)',
  BlueBackground = 'rgb(77, 122, 169)',
  GreenBackground = 'rgb(119, 184, 180)',
}

export enum CurrencyId {
  UsdId = 431,
  EurId = 451,
  RubId = 456,
  UahId = 449,
  PlnId = 452,
}

export enum EventType {
  Scroll = 'scroll',
  Unhandledrejection = 'unhandledrejection',
}

export enum LocalStorageKey {
  MainOptions = 'mainOptions',
  MainWidth = 'mainWidth',
  MainHeight = 'mainHeight',
  ExampleFirstOptions = 'exampleFirstOptions',
  ExampleSecondOptions = 'exampleSecondOptions',
  ExampleThirdOptions = 'exampleThirdOptions',
  City = 'city',
  AmericaCoin = 'americaCoin',
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}
