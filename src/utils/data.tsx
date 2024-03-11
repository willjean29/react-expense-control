import { Icons, Pallete } from "../styles/variables";
import { AiOutlineHome, AiOutlineApartment, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";

import { TbPig } from "react-icons/tb";

export const MenuUser = [
  {
    text: "Mi perfil",
    icono: <Icons.User />,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <Icons.Settings />,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <Icons.Logout />,
    tipo: "cerrarsesion",
  },
];

export const MenuCategories = [
  {
    text: "Categorias gastos",
    color: Pallete.BrandRed,
    tipo: "g",
    bgcolor: Pallete.BrandLightRed,
  },
  {
    text: "Categorias ingresos",
    color: Pallete.BrandGreen,
    tipo: "i",
    bgcolor: Pallete.BrandLightGreen,
  },
];
export const MenuMovements = [
  {
    text: "Gastos",
    color: Pallete.BrandRed,
    tipo: "g",
    bgcolor: Pallete.BrandLightRed,
  },
  {
    text: "Ingresos",
    color: Pallete.BrandGreen,
    tipo: "i",
    bgcolor: Pallete.BrandLightGreen,
  },
];

//data SIDEBAR
export const DrawerData = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Categorias",
    icon: <MdOutlineAnalytics />,
    to: "/categorias",
  },
  {
    label: "Movimientos",
    icon: <AiOutlineApartment />,
    to: "/movimientos",
  },
  {
    label: "Informes",
    icon: <MdOutlineAnalytics />,
    to: "/informes",
  },
  // {
  //   label: "Dashboard",
  //   icon: <RiDashboard3Line />,
  //   to: "/dashboard",
  // },
];
export const SettingsDrawerData = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },
  {
    label: "Acerca de",
    icon: <TbPig />,
    to: "/acercade",
  },
];
//temas
export const ThemesData = [
  {
    icono: "🌞",
    descripcion: "light",
  },
  {
    icono: "🌚",
    descripcion: "dark",
  },
];
