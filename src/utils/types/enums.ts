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
  Theme = 'theme',
  Language = 'language',
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Language {
  En = 'en',
  Ru = 'ru',
}

export enum ContentTxtKey {
  MainTitle = 'content.title.main',
  CreatingTitle = 'content.title.creating',
  GalleryTitle = 'content.title.gallery',
  ExamplesTitle = 'content.title.examples',
  InfoTitle = 'content.title.info',
  ContactsTitle = 'content.title.contacts',

  ViewMiniTitle = 'content.miniTitle.view',
  ChartMiniTitle = 'content.miniTitle.chart',
  SettingsMiniTitle = 'content.miniTitle.settings',
  WeatherMiniTitle = 'content.miniTitle.weather',
  CurrencyMiniTitle = 'content.miniTitle.currency',
  InfoMiniTitle1 = 'content.miniTitle.info1',
  InfoMiniTitle2 = 'content.miniTitle.info2',
  InfoMiniTitle3 = 'content.miniTitle.info3',

  MainDescription = 'content.description.main',
  CreatingDescription = 'content.description.creating',
  GalleryDescription = 'content.description.gallery',
  ExamplesDescription = 'content.description.examples',
  InfoDescription1 = 'content.description.info1',
  InfoDescription2 = 'content.description.info2',
  ContactsDescription = 'content.description.contacts',

  WeatherMiniDescription = 'content.miniDescription.weather',
  CurrencyMiniDescription = 'content.miniDescription.currency',
  InfoMiniDescription1 = 'content.miniDescription.info1',
  InfoMiniDescription2 = 'content.miniDescription.info2',
  InfoMiniDescription3 = 'content.miniDescription.info3',

  CreatingLink = 'content.link.creating',
  GalleryLink = 'content.link.gallery',
  ExamplesLink = 'content.link.examples',
  InfoLink = 'content.link.info',
  ContactsLink = 'content.link.contacts',

  CreateButton = 'content.button.create',
  EditButton = 'content.button.edit',
  AddRowButton = 'content.button.addRow',
  AddColumnButton = 'content.button.addColumn',
  ResetButton = 'content.button.reset',
  ViewAndSaveButton = 'content.button.viewAndSave',
  SaveButton = 'content.button.save',
  OpenButton = 'content.button.open',
  CloseButton = 'content.button.close',
  CopyButton = 'content.button.copy',

  MainText = 'content.text.main',
  CreateBoldText = 'content.text.createBold',
  CreateText = 'content.text.create',
  ShareBoldText = 'content.text.shareBold',
  ShareText = 'content.text.share',
  SaveBoldText = 'content.text.saveBold',
  SaveText = 'content.text.save',
  FooterText = 'content.text.footer',

  CityWeather = 'content.weather.city',
  TempWeather = 'content.weather.temp',
  StateWeather = 'content.weather.state',
  HumidityWeather = 'content.weather.humidity',
  WindWeather = 'content.weather.wind',
  SpeedWeather = 'content.weather.speed',

  BelarusCoin = 'content.coin.belarus',
  AmericaCoin = 'content.coin.america',
  EuropeCoin = 'content.coin.europe',
  RussiaCoin = 'content.coin.russia',
  UkraineCoin = 'content.coin.ukraine',
  PolandCoin = 'content.coin.poland',

  CityGeolocation = 'content.geolocation.city',
  LocationGeolocation = 'content.geolocation.location',
  CurrentGeolocation = 'content.geolocation.current',
  ErrorGeolocation = 'content.geolocation.error',
  ImpossibleGeolocation = 'content.geolocation.impossible',
  NotReceivedGeolocation = 'content.geolocation.notReceived',
  NotAllowedGeolocation = 'content.geolocation.notAllowed',

  PopulationTable = 'content.table.population',
  SalaryTable = 'content.table.salary',
  InflationTable = 'content.table.inflation',

  BasicTitleSettings = 'content.settings.basicTitle',
  AdditionalTitleSettings = 'content.settings.additionalTitle',
  WidthSettings = 'content.settings.width',
  HeightSettings = 'content.settings.height',
  NewRowSettings = 'content.settings.newRow',
  NewColumnSettings = 'content.settings.newColumn',

  LoadingService = 'content.service.loading',
  DataService = 'content.service.data',

  CopyHint = 'content.hint.copy',
  NoCopyHint = 'content.hint.noCopy',
  RowHint = 'content.hint.row',
  ColumnHint = 'content.hint.column',
}

export enum ChartTxtKey {
  Bar = 'chart.bar',
  HBar = 'chart.hBar',
  Line = 'chart.line',
  Radar = 'chart.radar',
  Pie = 'chart.pie',
  Doughnut = 'chart.doughnut',
}

export enum AltTxtKey {
  Chart = 'alt.chart',
  Logo = 'alt.logo',
  Mail = 'alt.mail',
  Info = 'alt.info',
  Error = 'alt.error',
  RuFlag = 'alt.ruFlag',
  EnFlag = 'alt.enFlag',
}

export enum ValidationTxtKey {
  Number = 'validation.number',
  Required = 'validation.required',
  Min = 'validation.min',
  Max = 'validation.max',
}

export enum ErrorTxtKey {
  Error = 'error.error',
  Network = 'error.network',
  Server = 'error.server',
  IncorrectCity = 'error.incorrectCity',
  RequiredCity = 'error.requiredCity',
  UnhandledPromise = 'error.unhandledPromise',
  UnhandledUI = 'error.unhandledUI',
  SomeError = 'error.someError',
}
