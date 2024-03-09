import styled from "styled-components";
import { useAuthStore } from "../../../store/auth.store";
import { useAuthContext } from "../../../context/AuthContext";

const HomePage = () => {
  const { user } = useAuthContext();
  const { signOut } = useAuthStore();
  return (
    <Container>
      <h1>Home Page</h1>
      <p>Bienvenido {user?.name}</p>
      <img src={user?.avatar} alt="user avatar" />
      <button onClick={signOut}>Cerrar</button>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default HomePage;
