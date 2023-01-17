import Input from "../../components/Forms/Input/Input";
import useForm from "../../hooks/useForm";
import Button from "../../components/Forms/Button/Button";
import { USER_POST } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Error";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error && <Error error={`${error}.`} />}
      </form>
    </section>
  );
};

export default LoginCreate;
