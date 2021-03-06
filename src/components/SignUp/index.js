import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { Container, Background, Content, AnimationContainer } from "./styles";

const SignUp = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "A senha deve conter no minimo 6 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = ({ username, password }) => {
    localStorage.setItem("Drugstore:username", JSON.stringify(username));
    localStorage.setItem("Drugstore:password", JSON.stringify(password));
    history.push("/login");
  };

  return (
    <Container>
      <Background>
        <section></section>
      </Background>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastre-se</h1>
            <h3> Primeiro, cadastre sua conta</h3>
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
                label="Email"
                size="small"
                color="primary"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
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

            <div>
              <TextField
                margin="normal"
                variant="outlined"
                label="Confirme sua senha"
                size="small"
                color="primary"
                {...register("passwordConfirm")}
                error={!!errors.passwordConfirm}
                helperText={errors.passwordConfirm?.message}
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
              Já tem uma conta ? Faça o <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
