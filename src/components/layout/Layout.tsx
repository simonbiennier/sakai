import Head from "next/head";
import { useRouter } from "next/router";
import { useEventListener, useUnmountEffect } from "primereact/hooks";
import { classNames, DomHandler } from "primereact/utils";
import {
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import Footer from "./Footer";
import AppSidebar from "./Sidebar";
import Topbar from "./Topbar";
import Scale from "./Scale";
import { LayoutContext } from "../../contexts/LayoutContext";
import PrimeReact from "primereact/api";

interface LayoutProps {
  children?: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = (props) => {
  const { layoutConfig, layoutState, setLayoutState } =
    useContext(LayoutContext);
  const topbarRef = useRef<any>(null!);
  const sidebarRef = useRef<HTMLDivElement>(null!);

  const router = useRouter();
  const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] =
    useEventListener({
      type: "click",
      listener: (event) => {
        const sbr = sidebarRef.current as any;
        const tbr = topbarRef.current as any;
        const isOutsideClicked = !(
          sbr.isSameNode(event.target) ||
          sbr.contains(event.target) ||
          tbr.menubutton.isSameNode(event.target) ||
          tbr.menubutton.contains(event.target)
        );

        if (isOutsideClicked) {
          hideMenu();
        }
      },
    });

  const [
    bindProfileMenuOutsideClickListener,
    unbindProfileMenuOutsideClickListener,
  ] = useEventListener({
    type: "click",
    listener: (event) => {
      const tbr = topbarRef.current as any;
      const isOutsideClicked = !(
        tbr.topbarmenu.isSameNode(event.target) ||
        tbr.topbarmenu.contains(event.target) ||
        tbr.topbarmenubutton.isSameNode(event.target) ||
        tbr.topbarmenubutton.contains(event.target)
      );

      if (isOutsideClicked) {
        hideProfileMenu();
      }
    },
  });

  const hideMenu = useCallback(() => {
    setLayoutState((prevLayoutState: any) => ({
      ...prevLayoutState,
      overlayMenuActive: false,
      staticMenuMobileActive: false,
      menuHoverActive: false,
    }));
    unbindMenuOutsideClickListener();
    unblockBodyScroll();
  }, [setLayoutState, unbindMenuOutsideClickListener]);

  const hideProfileMenu = useCallback(() => {
    setLayoutState((prevLayoutState: any) => ({
      ...prevLayoutState,
      profileSidebarVisible: false,
    }));
    unbindProfileMenuOutsideClickListener();
  }, [setLayoutState, unbindProfileMenuOutsideClickListener]);

  const blockBodyScroll = () => {
    (DomHandler as any).addClass("blocked-scroll");
  };

  const unblockBodyScroll = () => {
    (DomHandler as any).removeClass("blocked-scroll");
  };

  useEffect(() => {
    if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
      bindMenuOutsideClickListener();
    }

    layoutState.staticMenuMobileActive && blockBodyScroll();
  }, [
    bindMenuOutsideClickListener,
    layoutState.overlayMenuActive,
    layoutState.staticMenuMobileActive,
  ]);

  useEffect(() => {
    if (layoutState.profileSidebarVisible) {
      bindProfileMenuOutsideClickListener();
    }
  }, [bindProfileMenuOutsideClickListener, layoutState.profileSidebarVisible]);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      hideMenu();
      hideProfileMenu();
    });
  }, [hideMenu, hideProfileMenu, router.events]);

  PrimeReact.ripple = true;

  useUnmountEffect(() => {
    unbindMenuOutsideClickListener();
    unbindProfileMenuOutsideClickListener();
  });

  const containerClass = classNames("layout-wrapper", {
    "layout-theme-light": layoutConfig.theme === "light",
    "layout-theme-dark": layoutConfig.theme !== "light",
    "layout-overlay": layoutConfig.menuMode === "overlay",
    "layout-static": layoutConfig.menuMode === "static",
    "layout-static-inactive":
      layoutState.staticMenuDesktopInactive &&
      layoutConfig.menuMode === "static",
    "layout-overlay-active": layoutState.overlayMenuActive,
    "layout-mobile-active": layoutState.staticMenuMobileActive,
    "p-input-filled": layoutConfig.inputStyle === "filled",
    "p-ripple-disabled": !layoutConfig.ripple,
  });

  return (
    <>
      <Head>
        <title>SAKAI</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sakai variant by Simon Biennier" />
        <meta property="og:description" content="" />
        <meta property="og:ttl" content="604800" />
        <link rel="icon" href={`/favicon.ico`} type="image/x-icon" />
      </Head>

      <div className={containerClass}>
        <Topbar ref={topbarRef} />
        <div ref={sidebarRef} className="layout-sidebar">
          <AppSidebar />
        </div>
        <div className="layout-main-container">
          <div className="layout-main">{props.children}</div>
          <Footer />
        </div>
        <div style={{ display: "none" }}>
          <Scale />
        </div>
        <div className="layout-mask" />
      </div>
    </>
  );
};

export default Layout;
