import React, { useEffect } from "react";
import styles from "./loginForm.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/actions";
import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { status, refreshToken } = useSelector(({ userSlice }) => userSlice);
  console.log("refreshToken", refreshToken);
  console.log("status1111", status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notify = () => {
    toast.error("Неверный логин или пароль");
  };

  useEffect(() => {
    console.log("useEffect в компоненте loginForm");
    if (status === "ERROR") {
      notify();
    }

    if (status === "SUCCESS") {
      navigate("/logged");
    }
  }, [status]);
  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(user));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={styles.main_login}>
        <div className={styles.formwrapper_login}>
          <ToastContainer
            position="top-center"
            toastClassName={styles.toastmessage_login}
            bodyClassName={styles.toastContainer_logi}
          />

          <div className={styles.form__maintitle_login}>
            <p className={styles.form__text_login}>Login</p>
          </div>
          <form
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "48px",
              marginBottom: "10px",
            }}
            className={styles.form_login}
            action=""
          >
            <input
              sx={{ fontSize: "15px", fontWeight: "regular", letterSpacing: 1 }}
              className={styles.form__input_login}
              type="text"
              placeholder="Введи логин"
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />

            <input
              sx={{ fontSize: "15px", fontWeight: "regular", letterSpacing: 1 }}
              className={styles.form__input_login}
              type={showPassword ? "text" : "password"}
              placeholder="Введи пароль"
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              // endAdornment={
              //   <InputAdornment position="start">
              //     <IconButton
              //       className={styles.adornment}
              //       aria-label="toggle password visibility"
              //       onClick={handleClickShowPassword}
              //       onMouseDown={handleMouseDownPassword}
              //       edge="start"
              //     >
              //       {showPassword ? <VisibilityOff /> : <Visibility />}
              //     </IconButton>
              //   </InputAdornment>
              // }
            />
            <button onClick={handleLogin} className={styles.form__button_login}>
              Войти
            </button>
          </form>
          <NavLink to="/register" className={styles.form__bottomlink_login}>
            <p className={styles.form__bottom_text_login}>
              У меня еще нет аккаунта
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
