import React, { useEffect } from "react";
import styles from "./Registration.module.css";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Field, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/actions";
import { Formik, Form } from "formik";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ErrorHandle from "../error-handle/ErrorHandle";
import PasswordConfirmItem from "../error-handle/PasswordConfirmItem";

// import PasswordConfirmItem from "../error-handle/PasswordConfirmItem";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { registrationStatus } = useSelector(({ userSlice }) => userSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("registrationStatus", registrationStatus);

  useEffect(() => {
    if (registrationStatus === "SUCCESS") {
      return navigate("/confirm-email");
    }
  }, [registrationStatus]);

  const handleSubmit = (values) => {
    dispatch(registerUser(values));
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    password_confirm: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password confirmation is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <div className={styles.main_reg}>
      <div className={styles.form_reg}>
        <div className={styles.form__maintitle_reg}>
          <p className={styles.form__header_reg}>Создать аккаунт</p>
        </div>
        <Formik
          initialValues={formik.initialValues}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form__registraition} action="">
              <Field
                className={styles.form__input_reg}
                id="email"
                name="email"
                placeholder="Введи адрес почты"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              <div>
                <Field
                  className={styles.form__input_reg}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Создай пароль"
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  id="password"
                  type={showPassword ? "text" : "password"}
                />

                <IconButton
                  className={styles.adornment}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>

              <ErrorHandle
                values={formik.values}
                touched={formik.touched.password}
              />
              <div>
                <Field
                  style={{ borderRadius: "12px" }}
                  name="password_confirm"
                  value={formik.values.password_confirm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Повтори пароль"
                  error={
                    formik.touched.password_confirm &&
                    Boolean(formik.errors.password_confirm)
                  }
                  id="password_confirm"
                  type={showPassword ? "text" : "password"}
                />

                <IconButton
                  className={styles.adornment}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
              <PasswordConfirmItem values={formik.values} />

              <button
                style={{
                  marginTop: "24px",
                  backgroundColor: formik.isValid ? "black" : "lightgrey",
                  color: "grey",
                  height: "50px",
                  border: "none",
                  borderRadius: "12px",
                }}
                onClick={() => handleSubmit(formik.values)}
                type="submit"
                disabled={isSubmitting}
                className={styles.form__button}
                variant="contained"
              >
                Далее
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
