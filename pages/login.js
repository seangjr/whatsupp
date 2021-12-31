import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import Head from "next/head";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://i.pinimg.com/originals/01/d3/c2/01d3c269525c9c98234133d440d4bd7b.png" />
        <Button variant="contained" color="primary" onClick={signIn}>
          Log in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
