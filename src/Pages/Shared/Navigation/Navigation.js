import { Avatar, Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.jpg";
import { AuthContext } from "../../../Context/Context";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/home">
          <img src={logo} className="w-8 h-8 rounded-full" alt="" />
          <span className="self-center whitespace-nowrap  text-2xl dark:text-white font-bold px-3 text-blue-600">
            LEPhotography
          </span>
        </Navbar.Brand>

        <Navbar.Collapse>
          <Link to="/home" active={true}>
            Home
          </Link>
          <Link to="/navbars">About</Link>
          <Link to="/allservices">Services</Link>
          <Link to="/navbars">Pricing</Link>
          <Link to="/blog">Blog</Link>
        </Navbar.Collapse>
        <div className="flex">
          <div className="">
            {user ? (
              <>
                <div className="flex">
                  <Button onClick={handleLogOut} gradientDuoTone="purpleToBlue">
                    Log Out
                  </Button>
                  <img
                    className="w-10 h-10 rounded-full mx-3"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex">
                  <Link className="mx-2" to={"/login"}>
                    <Button gradientDuoTone="purpleToBlue">Log In</Button>
                  </Link>
                  <Link className="mx-2" to={"/register"}>
                    <Button gradientDuoTone="purpleToBlue">Register</Button>
                  </Link>
                  <Avatar rounded={true}></Avatar>
                </div>
              </>
            )}
          </div>
        </div>
        <Navbar.Toggle />
      </Navbar>
    </div>
  );
};

export default Navigation;