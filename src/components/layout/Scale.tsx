import { FC, useContext, useEffect } from "react";
import { LayoutContext } from "../../contexts/LayoutContext";

const Scale: FC = () => {
  const { layoutConfig } = useContext(LayoutContext);

  const applyScale = (fontSize: number) => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  };

  useEffect(() => {
    applyScale(layoutConfig.fontSize);
  }, [layoutConfig.fontSize]);

  return null;
};

export default Scale;
