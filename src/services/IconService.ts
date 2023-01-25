export class IconService {
  icons: never[];
  selectedIcon: null;

  constructor() {
    this.icons = [];
    this.selectedIcon = null;
  }

  getIcons() {
    return fetch("/data/icons.json", {
      headers: { "Cache-Control": "no-cache" },
    })
      .then((res) => res.json())
      .then((d) => d.icons);
  }

  getIcon(id: number) {
    if (this.icons) {
      this.selectedIcon = this.icons.find((x) => x.properties.id === id);
      return this.selectedIcon;
    }

    return;
  }
}
