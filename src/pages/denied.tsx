import AccessDenied from "../components/errors/AccessDenied";
import None from "../components/utils/None";

const Denied = () => {
  return <AccessDenied />;
};

Denied.getLayout = None;

export default Denied;
