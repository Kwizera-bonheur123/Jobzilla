import { NavLink } from "react-router-dom";
import Logo from "../assets/logo-light-3.png";
import DarkLogo from "../assets/logo-dark.png";
import { CiSearch } from "react-icons/ci";
import Button from "./Button";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { BiSolidShoppingBag } from "react-icons/bi";
import useHandleResize from "../hooks/useHandleResize";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Nav = () => {
  window.onscroll = () => console.log("Scrolled");
  const { show } = useHandleResize();
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const links = [
    { to: "/", label: "Home" },
    { to: "/jobs", label: "Jobs" },
    { to: "/employees", label: "Employees" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/dashboard", label: "Dashboard" },
  ];
  const shouldShowMenu = show || showMenu;

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const stickyPosition = navbarRef.current?.offsetTop || 0;
        if (window.scrollY >= stickyPosition + 5) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 1 }}
      animate={{ y: "0%" }}
      transition={{ ease: "easeOut", duration: 1 }}
      ref={navbarRef}
      className={`${
        isSticky
          ? "bg-white px-5 py-4 rounded-xl top-0"
          : "bg-transparent top-4"
      } z-50  items-center w-full lg:w-[78%] fixed flex justify-between sm:gap-[5%] text-center mx-[0%] lg:mx-[11%]`}
    >
      <img src={isSticky ? DarkLogo : Logo} className=" h-9 sm:h-14" />
      {shouldShowMenu && (
        <motion.div
          initial={{ x: "-100%", opacity: 1 }}
          animate={{ x: "0%" }}
          transition={{ ease: "easeOut", duration: 1 }}
          className={` ${
            isSticky ? "text-slate-900  p-4" : "text-white"
          } text-center bg-white sm:bg-transparent h-screen sm:h-auto top-0 text-slate-950 text-md font-sans absolute sm:relative flex flex-col gap-4 sm:flex-row sm:justify-between items-start sm:items-center pl-4 pt-3 w-[60%] sm:w-[40%]`}
        >
          {links.map((link) => (
            <NavLink to={link.to}>{link.label}</NavLink>
          ))}
        </motion.div>
      )}
      <div className=" flex gap-3 sm:gap-10 items-center">
        <CiSearch size="30px" />
        <div className="flex gap-3">
          <Button
            buttonType="submit"
            url="/"
            title={`${show ? "Sign up" : ""}`}
            icon={FaArrowRightToBracket}
            otherStyles=" hover:bg-blue-200 text-[#1967d2] bg-[#f0f6fe]"
          />
          <Button
            buttonType="submit"
            url="/"
            title={`${show ? "Post a job" : ""}`}
            icon={BiSolidShoppingBag}
            otherStyles=" hover:bg-blue-500 text-[#f0f6fe] bg-[#17171d]"
          />
          {!show && (
            <div
              className={`${isSticky && " text-blue-800"}`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <GiHamburgerMenu size="30px" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
