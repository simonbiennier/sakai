import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  FC,
  ReactNode,
} from "react";

interface MenuContextValue {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
}

export const MenuContext = createContext<MenuContextValue>(null!);

interface MenuProviderProps {
  children?: ReactNode;
}

export const MenuProvider: FC<MenuProviderProps> = (props) => {
  const [activeMenu, setActiveMenu] = useState("");

  const value = {
    activeMenu,
    setActiveMenu,
  };

  return (
    <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
  );
};
