import {
  createContext,
  useState,
  ReactNode,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

export type Theme = "light" | "dark";

export interface LayoutConfig {
  ripple: boolean;
  inputStyle: "outlined" | "filled";
  menuMode: "static" | "overlay";
  theme: Theme;
  fontSize: number;
}

export interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}

export interface LayoutValue {
  layoutConfig: LayoutConfig;
  setLayoutConfig: Dispatch<SetStateAction<LayoutConfig>>;
  layoutState: LayoutState;
  setLayoutState: Dispatch<SetStateAction<LayoutState>>;
  onMenuToggle: () => void;
  onThemeChange: (theme: Theme) => void;
  showProfileSidebar: () => void;
}

export const LayoutContext = createContext<LayoutValue>(null!);

interface LayoutProviderProps {
  children?: ReactNode | ReactNode[];
}

export const defaultLayout: LayoutConfig = {
  ripple: true,
  inputStyle: "outlined",
  menuMode: "static",
  theme: "dark",
  fontSize: 20,
};

export const LayoutProvider: FC<LayoutProviderProps> = (props) => {
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>(defaultLayout);
  const [layoutState, setLayoutState] = useState<LayoutState>({
    staticMenuDesktopInactive: true,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
  });

  const replaceLink = (
    linkElement: HTMLElement | null,
    href: string | null,
    onComplete: { (): void; (): any }
  ) => {
    if (!linkElement || !href) {
      return;
    }

    const id = linkElement.getAttribute("id");
    const cloneLinkElement: HTMLElement = linkElement.cloneNode(
      true
    ) as HTMLElement;

    cloneLinkElement.setAttribute("href", href);
    cloneLinkElement.setAttribute("id", id + "-clone");

    linkElement.parentNode?.insertBefore(
      cloneLinkElement,
      linkElement.nextSibling
    );

    cloneLinkElement.addEventListener("load", () => {
      linkElement.remove();

      if (!id) return;
      const element = document.getElementById(id); // re-check
      element && element.remove();

      cloneLinkElement.setAttribute("id", id);
      onComplete && onComplete();
    });
  };

  const onThemeChange = (theme: Theme) => {
    const themeLink = document.getElementById("theme-css");

    const newHref = `/themes/${theme}.css`;

    replaceLink(themeLink, newHref, () => {
      setLayoutConfig((prevState) => ({
        ...prevState,
        theme,
      }));
    });
  };

  const onMenuToggle = () => {
    if (isOverlay()) {
      setLayoutState((prevLayoutState) => {
        return {
          ...prevLayoutState,
          overlayMenuActive: !prevLayoutState.overlayMenuActive,
        };
      });
    }

    if (isDesktop()) {
      setLayoutState((prevLayoutState) => ({
        ...prevLayoutState,
        staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive,
      }));
    } else {
      setLayoutState((prevLayoutState) => ({
        ...prevLayoutState,
        staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive,
      }));
    }
  };

  const showProfileSidebar = () => {
    setLayoutState((prevLayoutState) => ({
      ...prevLayoutState,
      profileSidebarVisible: !prevLayoutState.profileSidebarVisible,
    }));
  };

  const isOverlay = () => {
    return layoutConfig.menuMode === "overlay";
  };

  const isDesktop = () => {
    return window.innerWidth > 991;
  };

  const value = {
    layoutConfig,
    setLayoutConfig,
    layoutState,
    setLayoutState,
    onMenuToggle,
    onThemeChange,
    showProfileSidebar,
  };

  return (
    <LayoutContext.Provider value={value}>
      {props.children}
    </LayoutContext.Provider>
  );
};
