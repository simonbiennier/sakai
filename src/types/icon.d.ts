export interface Attr {}

export interface Icon {
  paths: string[];
  attrs: Attr[];
  isMulticolor: boolean;
  isMulticolor2: boolean;
  grid: number;
  tags: string[];
  width?: number;
}

export interface Properties {
  order: number;
  id: number;
  name: string;
  prevSize: number;
  code: number;
}

export interface IconInfo {
  icon: Icon;
  attrs: Attr[];
  properties: Properties;
  setIdx: number;
  setId: number;
  iconIdx: number;
}

export interface Metadata {
  name?: string;
  url?: string;
  fontFamily: string;
  majorVersion: number;
  minorVersion: number;
  copyright: string;
  designer: string;
  description: string;
  fontURL: string;
  license: string;
  licenseURL: string;
}

export interface Metrics {
  emSize: number;
  baseline: number;
  whitespace: number;
}

export interface FontPref {
  prefix: string;
  metadata: Metadata;
  metrics: Metrics;
  embed: boolean;
  autoHost: boolean;
  showSelector: boolean;
  showMetrics: boolean;
  showMetadata: boolean;
  showVersion: boolean;
  includeMetadata: boolean;
}

export interface ImagePref {
  prefix: string;
  png: boolean;
  useClassSelector: boolean;
  color: number;
  bgColor: number;
  classSelector: string;
  height: number;
  columns: number;
  margin: number;
  name: string;
}

export interface QuickUsageToken {
  PrimeIcons: string;
}

export interface Preferences {
  showGlyphs: boolean;
  showQuickUse: boolean;
  showQuickUse2: boolean;
  showSVGs: boolean;
  fontPref: FontPref;
  imagePref: ImagePref;
  historySize: number;
  showCodes: boolean;
  gridSize: number;
  quickUsageToken: QuickUsageToken;
  showGrid: boolean;
}

export interface IconData {
  IcoMoonType: string;
  icons: Icon[];
  height: number;
  metadata: Metadata;
  preferences: Preferences;
}
