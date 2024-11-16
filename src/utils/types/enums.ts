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
  Not_found = '*',
  Main = '/',
  Create = '/create',
  Save = '/save',
  Gallery = '/gallery',
  Examples = '/examples',
  Info = '/info',
  Contacts = '/contacts',
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
  Response_bad_request = 400,
  Response_not_found = 404,
  Geolocation_network_error = 2,
  Geolocation_timeout_expired = 3,
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
  usdId = 431,
  eurId = 451,
  rubId = 456,
  uahId = 449,
  plnId = 452,
}

export enum EventType {
  Scroll = 'scroll',
  Unhandledrejection = 'unhandledrejection',
}
