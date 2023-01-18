import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RESET_PASSWORD } from "../../services/api";
import Error from "../../components/Error";
import Button from "../../components/Forms/Button/Button";
import Input from "../../components/Forms/Input/Input";
import Head from "../../components/Head";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";

const ResetPassword = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = RESET_PASSWORD({
      login,
      key,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) navigate("/login");
  }

  return (
    <section>
      <Head
        title="Alterar Senha"
        description="Formulário para alterar senha."
      />
      <h1 className="title">Alterar Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Salvar</Button>
        )}
        {error && <Error error={`${error}.`} />}
      </form>
    </section>
  );
};

export default ResetPassword;
