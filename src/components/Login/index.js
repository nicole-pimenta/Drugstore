import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { Container, Background, Content, AnimationContainer } from "./styles";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "A senha deve conter no minimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = ({ username, password }) => {
    const nome = localStorage.getItem("Drugstore:username");

    console.log(`"${username}"`);
    console.log(nome);
    if (`"${username}"` === nome) {
      history.push("/dashboard");
    }
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Entrar</h1>
            <h3> Entre com seu usuário e senha</h3>
            <div>
              <TextField
                margin="normal"
                variant="outlined"
                label="Nome de usuário"
                size="small"
                color="primary"
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </div>

            <div>
              <TextField
                margin="normal"
                variant="outlined"
                label="Cadastre sua senha"
                size="small"
                color="primary"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                type="password"
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Enviar
            </Button>

            <p>
              Não tem uma conta ? Faça seu <Link to="/signup">Cadastro</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background>
        <section></section>
      </Background>
    </Container>
  );
};

export default Login;
