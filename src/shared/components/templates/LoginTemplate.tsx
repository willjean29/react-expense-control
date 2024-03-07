import styled from "styled-components";
import Button from "../atoms/Button";
const LoginTemplate = () => {
  return (
    <Container>
      <div>
        <span className="version">versión 1.0</span>
        <div>
          <img src="" alt="" />
        </div>
        <Title>Cerdyn</Title>
        <p className="frase">Toma el control de tus 💵 gastos e 💰 ingresos</p>
        <Button />
      </div>
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

export default LoginTemplate;
