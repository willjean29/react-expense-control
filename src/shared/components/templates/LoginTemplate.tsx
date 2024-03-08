import styled from "styled-components";
import Button from "../atoms/Button";
import { Icons, Images, Pallete } from "../../../styles/variables";
import { useAuthStore } from "../../../store/auth.store";
const LoginTemplate = () => {
  const { signWithGoogle } = useAuthStore();
  return (
    <Container>
      <div className="content-card">
        <span className="version">versión 1.0</span>
        <div className="content-img">
          <img src={Images.Logo} alt="Logo de la app" />
        </div>
        <Title>Cerdyn</Title>
        <p className="phrase">Toma el control de tus 💵 gastos e 💰 ingresos</p>
        <ContainerBtn>
          <Button title="Iniciar con google" onClick={() => signWithGoogle()} icon={<Icons.Google />} bgColor={Pallete.BrandSecundaryColor} />
        </ContainerBtn>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${Images.Background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  .content-card {
    background-color: #131313;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    margin: 20px;
  }
  .version {
    color: #727272;
    text-align: start;
  }
  .content-img {
    img {
      max-width: 60%;
      animation: floating 1.5s ease-in-out infinite alternate;
    }
  }
  .phrase {
    color: #909090;
    font-size: 1.2rem;
  }
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;
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
