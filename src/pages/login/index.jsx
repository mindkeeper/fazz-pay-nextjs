import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Layout from "src/common/components/LayoutAuth";
import PageTitle from "src/common/components/PageTitle";
import styles from "src/common/styles/Login.module.css";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emptyForm, setEmptyForm] = useState(true);
  const [unouthorized, setUnouthorized] = useState(false);
  const [body, setBody] = useState({});
  //   const auth = useSelector((state) => state.auth);

  const checkEmptyForm = () => {
    if (!body.email || !body.password) return setEmptyForm(true);
    body.email && body.password && setEmptyForm(false);
  };
  const togglePassword = () => setShowPassword(!showPassword);

  const changeHandler = (e) =>
    setBody({ ...body, [e.target.name]: e.target.value });

  useEffect(() => {
    checkEmptyForm();
  }, [body]);

  return (
    <>
      <PageTitle title="Login" />

      <Layout>
        <h1 className={styles["h1"]}>
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h1>
        <p className={styles["description"]}>
          Transfering money is eassier than ever, you can access Zwallet
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
        <form className={styles["form"]}>
          <div className={styles["email"]}>
            <i className="bi bi-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              required
              onChange={changeHandler}
            ></input>
          </div>
          <div className={styles["password"]}>
            <i className="bi bi-lock"></i>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              onChange={changeHandler}
            ></input>
            <i
              className={`bi ${showPassword ? `bi-eye-slash` : `bi-eye`} 
            ${styles["toggle-password"]}`}
              onClick={togglePassword}
            ></i>
          </div>
          <div className={styles["link-forgot"]}>
            <Link href="/forgot" passHref>
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={emptyForm}
          >
            Login
          </button>
          <div className={styles["link-blue"]}>
            Don’t have an account? Let’s{"  "}
            <Link href="/register">Register</Link>
          </div>
        </form>
      </Layout>
    </>
  );
}
