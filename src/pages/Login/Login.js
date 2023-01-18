import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import ResetPassword from "../Password/ResetPassword";
import LostPassword from "../Password/LostPassword";
import { UserContext } from "../../contexts/userContext";
import styles from "./login.module.css";
import LoginCreate from "../LoginCreate/LoginCreate";
import PageNotFound from "../PageNotFound";
import Head from "../../components/Head";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <Head title="Login" description="Formulário de Login" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LostPassword />} />
          <Route path="resetar" element={<ResetPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
