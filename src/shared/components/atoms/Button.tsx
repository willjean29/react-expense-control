import styled from "styled-components";

const Button = () => {
  return (
    <Container>
      <p>Button</p>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export default Button;
