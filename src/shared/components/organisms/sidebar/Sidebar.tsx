import styled from "styled-components";
import { Images, Spacing } from "../../../../styles/variables";
import { DrawerData } from "../../../../utils/data";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Main>
      <Container>
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

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 100;
  height: 100%;
`;
const Main = styled.div``;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.bg4};
  margin: ${Spacing.Spacing2} 0;
`;

export default Sidebar;
