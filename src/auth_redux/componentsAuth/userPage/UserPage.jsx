import React, { useState, useEffect } from "react";
import styles from "./user-page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions";

import { useNavigate } from "react-router-dom";
import Modal from "react-modal"; // Импортируем react-modal

const UserPage = () => {
  const navigate = useNavigate();
  const { logoutSuccess } = useSelector(({ userSlice }) => userSlice);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  console.log("logoutSuccess from userPage component", logoutSuccess);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    if (logoutSuccess === "SUCCESS") {
      navigate("/login");
    }
  }, [logoutSuccess]);

  const handleLogout = () => {
    toggleModal(); // закрываем модальное окно
    dispatch(logoutUser()); // вылогиниваем юзера
  };

  return (
    <div className={styles.mainwrapper}>
      <div className={styles.text}>
        <p className={styles.text__header}>Добро пожаловать!</p>
        <p className={styles.text__name}>Lorby - твой личный репетитор</p>
      </div>

      <div className={styles.button}>
        <button onClick={toggleModal} className={styles.logout}>
          Выйти
        </button>
      </div>

      {/* Модальное окно */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <p className={styles.modal__header}>Выйти?</p>
        <p className={styles.modal__text}>Точно выйти?</p>
        <button onClick={handleLogout} className={styles.modal__logout_out}>
          Да, точно
        </button>
        <button onClick={toggleModal} className={styles.modal__logout_in}>
          Нет, остаться
        </button>
      </Modal>
    </div>
  );
};

export default UserPage;
