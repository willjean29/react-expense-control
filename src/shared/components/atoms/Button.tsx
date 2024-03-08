import styled from "styled-components";
import { Icon } from "./Icon";
interface ButtonProps {
  onClick: () => void;
  title: string;
  icon?: JSX.Element;
  bgColor?: string;
}
const Button: React.FC<ButtonProps> = ({ title, icon, bgColor = "transparent", onClick }) => {
  return (
    <Container bgColor={bgColor}>
      <Icon>{icon}</Icon>
      <span className="btn" onClick={onClick}>
        {title}
      </span>
    </Container>
  );
};

interface ContainerProps {
  bgColor: string;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  gap: 10px;
  .btn {
    background-color: ${(props) => props.bgColor};
    padding: 0.6rem 1.3rem;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4rem;
    box-shadow: 0.1rem 0.1rem black;
    transition: 0.2s;
    white-space: 1px;
    cursor: pointer;
    color: #000;
    &:hover {
      transform: translate(-0.05rem, -0.05rem);
      box-shadow: 0.15rem 0.15rem black;
    }
    &:active {
      transform: translate(0.05rem, 0.05rem);
      box-shadow: 0.05rem 0.05rem black;
    }
  }
`;

export default Button;
