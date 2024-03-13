import { CiPalette } from "react-icons/ci";
import { BsEmojiLaughing } from "react-icons/bs";
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiVipCrownFill } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { RiSettings3Line } from "react-icons/ri";
import { MdExitToApp } from "react-icons/md";
import { FcPicture } from "react-icons/fc";
import { CgMathPlus } from "react-icons/cg";
import { TbBrandSupabase } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BsArrowDown, BsArrowUpShort } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import logo from "../assets/logocerdo.png";
import { BsGoogle } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import { BiSave } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { HiOutlineChartPie } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { BsBarChartLine } from "react-icons/bs";
import { AiOutlineCalculator } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import fondo from "../assets/fondo1.svg";

export const Images = {
  Logo: logo,
  Background: fondo,
};

export const Icons = {
  Pallete: CiPalette,
  Emoji: BsEmojiLaughing,
  EditTable: RiEditLine,
  DeleteTable: RiDeleteBin2Line,
  ArrowDown: IoIosArrowDown,
  ArrowLeft: IoIosArrowForward,
  Crown: RiVipCrownFill,
  User: BiUserCircle,
  Settings: RiSettings3Line,
  Logout: MdExitToApp,
  EmptyImage: FcPicture,
  Add: CgMathPlus,
  Supabase: TbBrandSupabase,
  React: FaReact,
  BigArrowDown: BsArrowDown,
  BigArrowUp: BsArrowUpShort,
  Balance: FaBalanceScale,
  Google: BsGoogle,
  Close: RiCloseLine,
  Save: BiSave,
  Help: BsQuestionCircle,
  ChartPie: HiOutlineChartPie,
  Graph: SlGraph,
  ChartLine: BsBarChartLine,
  Calculator: AiOutlineCalculator,
  Check: BsCalendarCheck,
};

export enum Spacing {
  SidebarWidth = `300px`,
  SidebarWidthInitial = `10vw`,

  Spacing0 = `0px`,
  Spacing1 = `6px`,
  Spacing2 = `8px`,
  Spacing3 = `16px`,
  Spacing4 = `24px`,
  Spacing5 = `32px`,
  Spacing6 = `48px`,

  bpmaggie = `15em`,
  bplisa = `30em`,
  bpbart = `48em`,
  bpmarge = `62em`,
  bphomer = `75em`,
}

export const Pallete = {
  BrandGreen: `#53B257`,
  BrandRed: `#fe6156`,
  BrandLightGreen: `#e6ffe7`,
  BrandLightRed: `#fbcbc9`,
  BrandError: `#F54E41`,
  BrandSuccess: `#9046FF`,
  BrandMainColor: `#00F34A`,
  BrandSecundaryColor: `#DAC1FF`,
  BrandBoxshadowGray: `box-shadow: -2px 14px 20px -4px rgba(0,0,0,0.4);
    -webkit-box-shadow: -2px 14px 20px -4px rgba(0,0,0,0.4);
    -moz-box-shadow: -2px 14px 20px -4px rgba(0,0,0,0.4);`,
};
