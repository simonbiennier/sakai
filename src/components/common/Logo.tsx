import { FC } from "react";
import { IconBaseProps } from "react-icons/lib";
import { TfiInfinite } from "react-icons/tfi";

const Logo: FC<IconBaseProps> = (props) => {
  return <TfiInfinite {...props} />;
};

export default Logo;
