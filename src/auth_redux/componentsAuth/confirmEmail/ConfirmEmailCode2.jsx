import React, { useEffect, useContext } from "react";
import styles from "./confirmEmail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { checkUserEmail } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import WrongCodeError from "../error-handle/WrongCodeError";
import { CodeConfirm } from "../code-confirm/codeConfirm";

const ConfirmEmailCode2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { emailConfirmStatus, confirmCode, user } = useSelector(
    ({ userSlice }) => userSlice
  );

  console.log("confirmCode", confirmCode);
  console.log("email for confirm", user);

  const handleSubmit = () => {
    dispatch(checkUserEmail(user, confirmCode));
  };

  useEffect(() => {
    if (emailConfirmStatus === "SUCCESS") {
      navigate("/login");
    }
  }, [emailConfirmStatus]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.form}>
          <div className={styles.form__main_title}>
            <p className={styles.form__main_text}>
              Введи код, <br /> высланный на <br /> почту{" "}
              {user ? `(${user})` : ""}
            </p>
          </div>
          <div className={styles.form__registraition}>
            <CodeConfirm num={10} />
            {/* <WrongCodeError /> */}
            <button
              type="submit"
              onClick={handleSubmit}
              className={styles.form__button}
            >
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmailCode2;
