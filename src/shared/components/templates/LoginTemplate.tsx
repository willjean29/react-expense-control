import styled from "styled-components";
import Button from "../atoms/Button";
import { Icons } from "../../../styles/variables";
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
        <ContainerBtn>
          <Button title="Iniciar con google" onClick={() => {}} icon={<Icons.Google />} />
        </ContainerBtn>
      </div>
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;
const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export default LoginTemplate;
