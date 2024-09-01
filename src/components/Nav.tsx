import { NavLink } from "react-router-dom";
import Logo from "../assets/logo-light-3.png";
const Nav = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/jobs", label: "Jobs" },
    { to: "/employees", label: "Employees" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/dashboard", label: "Dashboard" },
  ];
  return (
    <div className="">
      <div className=" text-white w-[90%] fixed top-0 flex gap-[5%] text-center mt-4 mx-[5%]">
        <img src={Logo} className=" h-14" />
        <div className=" text-center flex justify-between items-center w-[40%]">
          {links.map((link) => (
            <NavLink to={link.to}>{link.label}</NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
