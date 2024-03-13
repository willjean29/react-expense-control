import styled from "styled-components";
import { Icons, Images, Spacing } from "../../../../styles/variables";
import { DrawerData } from "../../../../utils/data";
import { NavLink } from "react-router-dom";
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Main isOpen={isOpen}>
      <span onClick={() => setIsOpen(!isOpen)} className="btn-sidebar">
        <Icons.ArrowLeft />
      </span>
      <Container isOpen={isOpen} className={isOpen ? "active" : ""}>
        <div className="content-logo">
          <div className="content-img">
            <img src={Images.Logo} alt="image icon" />
          </div>
          <h2>cerdys</h2>
        </div>
        {DrawerData.map((item, index) => (
          <div className={`link-container ${isOpen ? "active" : ""}`} key={index}>
            <NavLink to={item.to} className={({ isActive }) => `links ${isActive ? "active" : ""}`}>
              <div className="link-icon">{item.icon}</div>
              {isOpen && <span>{item.label}</span>}
            </NavLink>
          </div>
        ))}
        <Divider />
      </Container>
    </Main>
  );
};

interface ContainerProps {
  isOpen: boolean;
}
const Container = styled.div<ContainerProps>`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 100;
  height: 100%;
  width: 65px;
  &.active {
    width: 220px;
  }
  .content-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    .content-img {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 30px;
      transition: all 0.5s ease-in-out;
      transform: ${({ isOpen }) => (isOpen ? "scale(0.7)" : "scale(1.5)")} rotate(${({ theme }) => theme.logorotate});
      img {
        width: 100%;
        animation: floting 2s infinite;
      }
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    }
    @keyframes floting {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(4px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  .link-container {
    margin: 5px 0;
    padding: 0 5%;
    position: relative;
    &:hover {
      background-color: ${({ theme }) => theme.bgAlpha};
    }
    .links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${Spacing.Spacing1} - 2px) 0;
      color: ${({ theme }) => theme.text};
      height: 60px;
      .link-icon {
        display: flex;
        padding: ${Spacing.Spacing1} ${Spacing.Spacing2};
        svg {
          font-size: 25px;
        }
      }

      &.active {
        color: ${({ theme }) => theme.bg5};
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          border-radius: 10px;
          background-color: ${({ theme }) => theme.bg5};
        }
      }
    }
  }
`;

const Main = styled.div<ContainerProps>`
  .btn-sidebar {
    position: fixed;
    top: 70px;
    left: 42px;
    z-index: 200;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    color: ${(props) => props.theme.text};
    transform: ${({ isOpen }) => (isOpen ? `translateX(162px) rotate(3.142rad)` : `initial`)};
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.bg4};
  margin: ${Spacing.Spacing2} 0;
`;

export default Sidebar;
