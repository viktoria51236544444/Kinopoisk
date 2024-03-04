import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../helpersAuth/const";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userObj) => {
    console.log("userObj", userObj);
    try {
      let res = await axios.post(`${API}/register/`, {
        email: userObj.email,
        username: userObj.username,
        password: userObj.password,
        password_confirm: userObj.password_confirm,
      });

      console.log("res", res);

      console.log("res", res.status);
      console.log("res", res.statusText);

      return res;
    } catch (err) {
      console.log("словили ошибку", err);
      return err;
    }
  }
);

export const loginUser = createAsyncThunk("user/loginUser", async (userObj) => {
  try {
    let res = await axios.post(`${API}/login/`, {
      username: userObj.username,
      password: userObj.password,
    });
    console.log("res after login", res);
    return { res, userObj };
  } catch (err) {
    console.warn("error when logging", err);
    return err;
  }
});

export const checkUserEmail = createAsyncThunk(
  "user/email-confirm",
  async (confirmCode) => {
    console.log("confirmCode", confirmCode);
    try {
      let res = await axios.post(`${API}/email-confirm/`, {
        code: confirmCode,
      });
      return res;
    } catch (err) {
      return {
        ...err,
        error: true,
      };
    }
  }
);

export const logoutUser = createAsyncThunk("logout/", async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token");
    const accessToken = localStorage.getItem("access_token");
    let res = await axios.post(
      `${API}/logout/`,
      {
        refresh_token: refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Content_Type: "application/json",
        },
      }
    );
    console.log("res from logout user", res);

    if (res.status === 200) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      return res;
    }
  } catch (err) {
    console.log("logout_err", err);
  }
});
