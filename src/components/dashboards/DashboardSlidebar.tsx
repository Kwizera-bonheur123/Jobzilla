import Logo from '../../assets/logo-dark.png' 
import { FaHome } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io"; 
import { IoPeople } from "react-icons/io5";
import { BiSolidBookmark } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { Bs0SquareFill } from "react-icons/bs";
import { FaMessage, FaSuitcase } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
export const DashboardSlidebar = () => {
  const links = [
    {to:'/dashboard', label:'Dashboard', icon:FaHome},
    {to:'/company', label:'Company Profile', icon:IoIosPersonAdd},
    {to:'/jobs', label:'Jobs', icon:FaSuitcase},
    {to:'/cabdidates', label:'Candidates',icon:IoPeople},
    {to:'/bookmark', label:'Bookmark resume', icon:BiSolidBookmark},
    {to:'/packages', label:'Packages', icon:Bs0SquareFill},
    {to:'/messages', label:'Messages', icon:FaMessage},
    {to:'/resume', label:'Resume Alerts', icon:FaBookOpen},
    {to:'/delete', label:'Delete Profile', icon:RiDeleteBin5Fill},
    {to:'/logout', label:'Log Out', icon:PiSignOutBold},

  ];
  return (
    <div className=" bg-blue-100 h-screen w-[20%] pl-6">
      <div className=' pt-14'>
      <img src={Logo} className=' h-10'/>
      <div className=' grid gap-7 mt-5'>
        {
          links.map((link, index) => (
            <NavLink key={index} to={link.to} className={({isActive}) =>` flex items-center gap-2 text-sm ${isActive ? 'bg-white text-blue-500 p-3 rounded-l-lg': ''}` }><link.icon size="20px"/>{link.label}</NavLink>
          ))
        }
      </div>
      </div>
    </div>
  )
}
