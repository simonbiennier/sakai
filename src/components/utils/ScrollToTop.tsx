import { ReactNode, useEffect } from "react";

interface ScrollToTopProps {
  children?: ReactNode | ReactNode[];
}

const ScrollToTop = (props: ScrollToTopProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <>{props.children}</>;
};

export default ScrollToTop;
