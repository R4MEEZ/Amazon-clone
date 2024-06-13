import { NavLink } from "react-router-dom";
import cart from "../Assets/cart.svg";
import logOut from "../Assets/logout.svg";
import { useSelector } from "react-redux";
import profile from "../Assets/Profile.svg";
import { useCookies } from "react-cookie";

const handleCart = () => {
  console.log("test");
};

const handleProfile = () => {
  console.log("test");
};

function CustomNav() {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  let auth = false;
  const recievedToken = cookie.token;
  recievedToken ? (auth = true) : (auth = false);

  const handleLogOut = () => {
    removeCookie("token");
    console.log("object")
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Amazon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="d-flex align-content-center " to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ProductsPage">Products</NavLink>
            </li>
          </ul>
          {auth ? (
            <NavLink to="/Login">
              <div className="profile mx-2 bg-body-secondary  p-1 rounded">
                <img
                  className="mx-2"
                  src={logOut}
                  alt=""
                  onClick={handleLogOut}
                />
              </div>
            </NavLink>
          ) : (
            <NavLink to="/Login">
              <div className="profile mx-2 bg-body-secondary  p-1 rounded">
                <img
                  className="mx-2"
                  src={profile}
                  alt=""
                  onClick={handleProfile}
                />
              </div>
            </NavLink>
          )}
          <NavLink to="/CartPage">
            <div className="cart">
              <img
                src={cart}
                className="mr-2 bg-body-secondary  p-1 rounded"
                onClick={handleCart}
              />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default CustomNav;
