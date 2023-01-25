import Link from "next/link";
import { classNames } from "primereact/utils";
import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  FC,
  SyntheticEvent,
} from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { LayoutContext } from "../../contexts/LayoutContext";
import Logo from "../common/Logo";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useRouter } from "next/router";
import { BsMoonStars, BsSun } from "react-icons/bs";

interface TopbarContent {
  ref: any;
}

const Topbar: FC<TopbarContent> = forwardRef((_, ref) => {
  const {
    layoutConfig,
    onThemeChange: onColorSchemeChange,
    layoutState,
    onMenuToggle,
    showProfileSidebar,
  } = useContext(LayoutContext);
  const menubuttonRef = useRef<HTMLButtonElement>(null!);
  const topbarmenuRef = useRef<HTMLDivElement>(null!);
  const topbarmenubuttonRef = useRef<HTMLButtonElement>(null!);

  const profileMenu = useRef<Menu>(null!);
  const notifMenu = useRef<Menu>(null!);

  const router = useRouter();

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));

  const notifMenuItems: MenuItem[] = [
    {
      label: "Notification 1",
    },
  ];

  const profileMenuItems: MenuItem[] = [
    {
      label: "Profile",
      icon: <AiOutlineUser className={"p-menuitem-icon"} />,
      command: () => router.push("/profile"),
    },
    {
      label: "Settings",
      icon: <IoSettingsOutline className={"p-menuitem-icon"} />,
      command: () => router.push("/settings"),
    },
    {
      separator: true,
    },
    // {
    //   label: "Logout",
    //   icon: <FiLogOut className={"p-menuitem-icon"} />,
    //   command: async () => {
    //     await logout();
    //     await apolloClient.cache.reset();
    //     router.push("/login");
    //   },
    // },
  ];

  const toggleProfile = (e: SyntheticEvent) => {
    profileMenu.current.toggle(e);
  };

  const toggleNotif = (e: SyntheticEvent) => {
    notifMenu.current.toggle(e);
  };

  return (
    <div className="layout-topbar">
      <button
        ref={menubuttonRef}
        type="button"
        className="p-link layout-menu-button layout-topbar-button"
        onClick={onMenuToggle}
      >
        <HiBars3CenterLeft size={30} />
      </button>

      <Link href="/">
        <a className="layout-topbar-logo">
          <Logo size={35} className="mr-2" />
          <span className="ml-2">TEMPLATE</span>
        </a>
      </Link>

      <button
        ref={topbarmenubuttonRef}
        type="button"
        className="p-link layout-topbar-menu-button layout-topbar-button"
        onClick={showProfileSidebar}
      >
        <i className="pi pi-ellipsis-v" />
      </button>

      <div
        ref={topbarmenuRef}
        className={classNames("layout-topbar-menu", {
          "layout-topbar-menu-mobile-active": layoutState.profileSidebarVisible,
        })}
      >
        {layoutConfig.theme !== "light" ? (
          <button
            onClick={() => onColorSchemeChange("light")}
            type="button"
            className="p-link layout-topbar-button"
          >
            <BsSun size={30} />
            <span>Dark Mode</span>
          </button>
        ) : (
          <button
            onClick={() => onColorSchemeChange("dark")}
            type="button"
            className="p-link layout-topbar-button"
          >
            <BsMoonStars size={30} />
            <span>Light Mode</span>
          </button>
        )}

        <Menu ref={notifMenu} model={notifMenuItems} popup />
        <button
          onClick={toggleNotif}
          type="button"
          className="p-link layout-topbar-button"
        >
          <IoMdNotificationsOutline className={"p-menuitem-icon"} size={30} />
          <span>Notifications</span>
        </button>

        <Menu ref={profileMenu} model={profileMenuItems} popup />
        <button
          onClick={toggleProfile}
          type="button"
          className="p-link layout-topbar-button"
        >
          <AiOutlineUser className="p-menuitem-icon" size={30} />
          <span>Profile</span>
        </button>

        {/* <Link href="/settings">
          <button type="button" className="p-link layout-topbar-button">
            <IoSettingsOutline size={30} />
            <span>Settings</span>
          </button>
        </Link> */}

        {/* <button
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
          }}
          type="button"
          className="p-link layout-topbar-button"
        >
          <FiLogOut size={30} />
          <span>Logout</span>
        </button> */}
      </div>
    </div>
  );
});

Topbar.displayName = "Topbar";

export default Topbar;
