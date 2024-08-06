//icons
import { IoIosHome } from "react-icons/io";
import { BsImages } from "react-icons/bs";
import { GrConfigure } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";

export const links = [
  {
    name: "Inicio",
    icon: <IoIosHome className="w-8 h-8 hover:text-blue-500" />,
    href: "/",
  },
  {
    name: "Biografia",
    icon: <IoPersonSharp className="w-8 h-8 hover:text-blue-500" />,
    href: "/profile",
  },
  {
    name: "Mis Publicaciones",
    icon: <BsImages className="w-8 h-8 hover:text-blue-500" />,
    href: "/posts",
  },
  {
    name: "Configuracion",
    icon: <GrConfigure className="w-8 h-8 hover:text-blue-500" />,
    href: "/config",
  },
];
