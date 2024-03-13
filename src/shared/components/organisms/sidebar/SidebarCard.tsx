import styled from "styled-components";
import { Icons } from "../../../../styles/variables";
import Button from "../../atoms/Button";

const SidebarCard = () => {
  return (
    <Container>
      <span className="icon">
        <Icons.Help />
      </span>
      <div className="content-card">
        <div className="circle-top"></div>
        <div className="circle-bottom"></div>
        <h3>Centro de ayuda</h3>
        <Button title="Conectar" bgColor="#f8f2fd" onClick={() => {}} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  position: relative;
  .icon {
    position: absolute;
    font-size: 3rem;
    border-radius: 50%;
    top: -8px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }
  .content-card {
    position: relative;
    padding: 1rem;
    background-color: ${({ theme }) => theme.bg5};
    border-radius: 10px;
    overflow: hidden;
    .circle-top,
    .circle-bottom {
      position: absolute;
      background: ${(props) => props.theme.whiteBg};
      border-radius: 50%;
      opacity: 0.7;
    }
    .circle-top {
      height: 100px;
      width: 100px;
      top: -50px;
      left: -50px;
    }
    .circle-bottom {
      height: 130px;
      width: 130px;
      bottom: -80px;
      right: -70px;
    }
    h3 {
      font-size: 1.1rem;
      margin-top: 1rem;
      padding: 1rem 0;
      font-weight: 700;
      color: #000;
    }
  }
`;

export default SidebarCard;
