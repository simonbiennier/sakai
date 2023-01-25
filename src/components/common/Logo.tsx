import { FC } from "react";
import { IconBaseProps } from "react-icons/lib";
import { BsChat } from "react-icons/bs";

const Logo: FC<IconBaseProps> = (props) => {
  return <BsChat {...props} />;
};

export default Logo;
