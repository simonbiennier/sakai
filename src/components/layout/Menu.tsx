// import { useContext } from "react";
import MenuItem from "./MenuItem";
// import { LayoutContext } from "../../contexts/LayoutContext";
import { MenuProvider } from "../../contexts/MenuContext";
import { Item } from "../../types/item";

const Menu = () => {
  // const { layoutConfig } = useContext(LayoutContext);
  const model: Item[] = [
    {
      label: "Home",
      items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" }],
    },
    {
      label: "UI Components",
      items: [
        {
          label: "Form Layout",
          icon: "pi pi-fw pi-id-card",
          to: "/demo/FormLayoutDemo",
        },
        {
          label: "Input",
          icon: "pi pi-fw pi-check-square",
          to: "/demo/InputDemo",
        },
        {
          label: "Float Label",
          icon: "pi pi-fw pi-bookmark",
          to: "/demo/FloatLabelDemo",
        },
        {
          label: "Invalid State",
          icon: "pi pi-fw pi-exclamation-circle",
          to: "/demo/InvalidStateDemo",
        },
        {
          label: "Button",
          icon: "pi pi-fw pi-mobile",
          to: "/demo/ButtonDemo",
          class: "rotated-icon",
        },
        { label: "Table", icon: "pi pi-fw pi-table", to: "/demo/TableDemo" },
        { label: "List", icon: "pi pi-fw pi-list", to: "/demo/ListDemo" },
        { label: "Tree", icon: "pi pi-fw pi-share-alt", to: "/demo/TreeDemo" },
        { label: "Panel", icon: "pi pi-fw pi-tablet", to: "/demo/PanelDemo" },
        {
          label: "Overlay",
          icon: "pi pi-fw pi-clone",
          to: "/demo/OverlayDemo",
        },
        { label: "Media", icon: "pi pi-fw pi-image", to: "/demo/MediaDemo" },
        {
          label: "Menu",
          icon: "pi pi-fw pi-bars",
          to: "/demo/MenuDemo",
          preventExact: true,
        },
        {
          label: "Message",
          icon: "pi pi-fw pi-comment",
          to: "/demo/MessageDemo",
        },
        { label: "File", icon: "pi pi-fw pi-file", to: "/demo/FileDemo" },
        {
          label: "Chart",
          icon: "pi pi-fw pi-chart-bar",
          to: "/demo/ChartDemo",
        },
        { label: "Misc", icon: "pi pi-fw pi-circle", to: "/demo/MiscDemo" },
      ],
    },
    {
      label: "Prime Blocks",
      items: [
        {
          label: "Free Blocks",
          icon: "pi pi-fw pi-eye",
          to: "/demo/blocks",
          badge: "NEW",
        },
        {
          label: "All Blocks",
          icon: "pi pi-fw pi-globe",
          url: "https://www.primefaces.org/primeblocks-react",
          target: "_blank",
        },
      ],
    },
    {
      label: "Utilities",
      items: [
        {
          label: "PrimeIcons",
          icon: "pi pi-fw pi-prime",
          to: "/demo/IconsDemo",
        },
        {
          label: "PrimeFlex",
          icon: "pi pi-fw pi-desktop",
          url: "https://www.primefaces.org/primeflex/",
          target: "_blank",
        },
      ],
    },
    {
      label: "Pages",
      icon: "pi pi-fw pi-briefcase",
      to: "/demo/pages",
      items: [
        {
          label: "Landing",
          icon: "pi pi-fw pi-globe",
          to: "/demo/pages/Landing",
        },
        {
          label: "Auth",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "Login",
              icon: "pi pi-fw pi-sign-in",
              to: "/login",
            },
            {
              label: "Error",
              icon: "pi pi-fw pi-times-circle",
              to: "/error",
            },
            {
              label: "Access Denied",
              icon: "pi pi-fw pi-lock",
              to: "/denied",
            },
          ],
        },
        {
          label: "Crud",
          icon: "pi pi-fw pi-pencil",
          to: "/demo/pages/Crud",
        },
        {
          label: "Timeline",
          icon: "pi pi-fw pi-calendar",
          to: "/demo/pages/TimelineDemo",
        },
        {
          label: "Not Found",
          icon: "pi pi-fw pi-exclamation-circle",
          to: "/404",
        },
      ],
    },
    {
      label: "Hierarchy",
      items: [
        {
          label: "Submenu 1",
          icon: "pi pi-fw pi-bookmark",
          items: [
            {
              label: "Submenu 1.1",
              icon: "pi pi-fw pi-bookmark",
              items: [
                { label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
                { label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
                { label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" },
              ],
            },
            {
              label: "Submenu 1.2",
              icon: "pi pi-fw pi-bookmark",
              items: [{ label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" }],
            },
          ],
        },
        {
          label: "Submenu 2",
          icon: "pi pi-fw pi-bookmark",
          items: [
            {
              label: "Submenu 2.1",
              icon: "pi pi-fw pi-bookmark",
              items: [
                { label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
                { label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" },
              ],
            },
            {
              label: "Submenu 2.2",
              icon: "pi pi-fw pi-bookmark",
              items: [{ label: "Submenu 2.2.1", icon: "pi pi-fw pi-bookmark" }],
            },
          ],
        },
      ],
    },
    {
      label: "Get Started",
      items: [
        {
          label: "Documentation",
          icon: "pi pi-fw pi-question",
          to: "/demo/documentation",
        },
        {
          label: "View Source",
          icon: "pi pi-fw pi-search",
          url: "",
          target: "_blank",
        },
      ],
    },
  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item.seperator ? (
            <MenuItem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className="menu-separator" />
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default Menu;
