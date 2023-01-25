export interface Item {
  label?: string;
  icon?: string;
  to?: string;
  class?: string;
  preventExact?: boolean;
  badge?: string;
  url?: string;
  target?: string;
  items?: Item[];
  seperator?: boolean;
}
