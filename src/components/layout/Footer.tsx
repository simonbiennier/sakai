import { FC } from "react";
import { GiSeaDragon } from "react-icons/gi";

const Footer: FC = () => {
  return (
    <div className="layout-footer">
      <GiSeaDragon size={25} className="mr-1" />
      by
      <span className="font-medium ml-1">Simon Biennier</span>
    </div>
  );
};

export default Footer;
