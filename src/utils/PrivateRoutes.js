import { useCookies } from "react-cookie";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [cookie, setCookie] = useCookies(["token"]);

  let auth = false;
  const recievedToken = cookie.token;
  recievedToken ? auth = true : auth = false;
  return auth ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateRoutes;