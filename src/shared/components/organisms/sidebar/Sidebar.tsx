import styled from "styled-components";
import { Images, Spacing } from "../../../../styles/variables";
import { DrawerData } from "../../../../utils/data";
import { NavLink } from "react-router-dom";
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <Main>
      <Container isOpen={isOpen}>
        <div className="content-logo">
          <div className="content-img">
            <img src={Images.Logo} alt="image icon" />
          </div>
          <h2>cerdys</h2>
        </div>
        {DrawerData.map((item, index) => (
          <NavLink to={item.to} key={index}>
            <div className="link-icon">{item.icon}</div>
            <span>{item.label}</span>
          </NavLink>
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
      display: ${({ isOpen }) => (isOpen ? "none" : "block")};
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
`;

const Main = styled.div``;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.bg4};
  margin: ${Spacing.Spacing2} 0;
`;

export default Sidebar;
