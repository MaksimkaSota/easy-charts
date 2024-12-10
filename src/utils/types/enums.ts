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
  MainTitle = 'content.mainTitle',
  CreatingTitle = 'content.creatingTitle',
  GalleryTitle = 'content.galleryTitle',
  ExamplesTitle = 'content.examplesTitle',
  InfoTitle = 'content.infoTitle',
  ContactsTitle = 'content.contactsTitle',
  ViewMiniTitle = 'content.viewMiniTitle',
  ChartMiniTitle = 'content.chartMiniTitle',
  SettingsMiniTitle = 'content.settingsMiniTitle',
  WeatherMiniTitle = 'content.weatherMiniTitle',
  CurrencyMiniTitle = 'content.currencyMiniTitle',
  InfoMiniTitle1 = 'content.infoMiniTitle1',
  InfoMiniTitle2 = 'content.infoMiniTitle2',
  InfoMiniTitle3 = 'content.infoMiniTitle3',
  MainDescription = 'content.mainDescription',
  CreatingDescription = 'content.creatingDescription',
  GalleryDescription = 'content.galleryDescription',
  ExamplesDescription = 'content.examplesDescription',
  InfoDescription1 = 'content.infoDescription1',
  InfoDescription2 = 'content.infoDescription2',
  ContactsDescription = 'content.contactsDescription',
  InfoMiniDescription1 = 'content.infoMiniDescription1',
  InfoMiniDescription2 = 'content.infoMiniDescription2',
  InfoMiniDescription3 = 'content.infoMiniDescription3',
  WeatherMiniDescription = 'content.weatherMiniDescription',
  CurrencyMiniDescription = 'content.currencyMiniDescription',
  CreatingLink = 'content.creatingLink',
  GalleryLink = 'content.galleryLink',
  ExamplesLink = 'content.examplesLink',
  InfoLink = 'content.infoLink',
  ContactsLink = 'content.contactsLink',
  CreateButton = 'content.createButton',
  EditButton = 'content.editButton',
  AddRowButton = 'content.addRowButton',
  AddColumnButton = 'content.addColumnButton',
  ResetButton = 'content.resetButton',
  ViewAndSaveButton = 'content.viewAndSaveButton',
  SaveButton = 'content.saveButton',
  OpenButton = 'content.openButton',
  CopyButton = 'content.copyButton',
  MainText = 'content.mainText',
  CreateBoldText = 'content.createBoldText',
  CreateText = 'content.createText',
  ShareBoldText = 'content.shareBoldText',
  ShareText = 'content.shareText',
  SaveBoldText = 'content.saveBoldText',
  SaveText = 'content.saveText',
  FooterText = 'content.footerText',
  WeatherCity = 'content.weatherCity',
  WeatherTemp = 'content.weatherTemp',
  WeatherState = 'content.weatherState',
  WeatherHumidity = 'content.weatherHumidity',
  WeatherWind = 'content.weatherWind',
  WeatherSpeed = 'content.weatherSpeed',
  BelarusCoin = 'content.belarusCoin',
  AmericaCoin = 'content.americaCoin',
  EuropeCoin = 'content.europeCoin',
  RussiaCoin = 'content.russiaCoin',
  UkraineCoin = 'content.ukraineCoin',
  PolandCoin = 'content.polandCoin',
  CityGeolocation = 'content.cityGeolocation',
  LocationGeolocation = 'content.locationGeolocation',
  CurrentGeolocation = 'content.currentGeolocation',
  ErrorGeolocation = 'content.errorGeolocation',
  ImpossibleGeolocation = 'content.impossibleGeolocation',
  NotReceivedGeolocation = 'content.notReceivedGeolocation',
  NotAllowedGeolocation = 'content.notAllowedGeolocation',
  PopulationTable = 'content.populationTable',
  SalaryTable = 'content.salaryTable',
  InflationTable = 'content.inflationTable',
  BasicTitleSettings = 'content.basicTitleSettings',
  AdditionalTitleSettings = 'content.additionalTitleSettings',
  WidthSettings = 'content.widthSettings',
  HeightSettings = 'content.heightSettings',
  NewRowSettings = 'content.newRowSettings',
  NewColumnSettings = 'content.newColumnSettings',
  LoadingService = 'content.loadingService',
  DataService = 'content.dataService',
  CopyHint = 'content.copyHint',
  NoCopyHint = 'content.noCopyHint',
  RowHint = 'content.rowHint',
  ColumnHint = 'content.columnHint',
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
