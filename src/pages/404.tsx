import NotFound from "../components/errors/NotFound";
import None from "../components/utils/None";

const Custom404 = () => {
  return <NotFound />;
};

Custom404.getLayout = None;

export default Custom404;
