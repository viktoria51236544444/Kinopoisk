import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, checkUserEmail, logoutUser } from "./actions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
    confirmCode: "",
    wrongCodeError: null,
    status: null,
    registrationStatus: null,
    refreshToken: null,
    logoutSuccess: null,
    emailConfirmSuccess: null,
  },
  reducers: {
    cleanErrorState: (state) => {
      state.error = null;
    },
    cleanStatusState: (state) => {
      state.status = "";
    },
    cleanUserState: (state) => {
      state.user = null;
    },
    confirmUserCode: (state, action) => {
      state.confirmCode = action.payload;
    },
    setUser: (state, action) => {
      // Добавляем новый редьюсер для установки пользователя
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload?.code === "ERR_BAD_REQUEST") {
          state.registrationStatus = "ERROR";
          state.loading = false;
        } else {
          state.loading = false;
          state.registrationStatus = "SUCCESS";
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log("rejected не удалось");
        state.loading = false; // Ошибка возвращается с сервера
      })
      .addCase(loginUser.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.logoutSuccess = null; // при повторной авторизации, logout success должно снова стать null;
        if (action.payload?.code === "ERR_BAD_REQUEST") {
          state.status = "ERROR";
        } else {
          state.status = "SUCCESS";
          console.log("action.payload", action.payload);
          state.refreshToken = action.payload?.res?.data?.refresh;
          localStorage.setItem("refresh", action.payload?.res?.data?.refresh);
          localStorage.setItem(
            "access_token",
            action.payload?.res?.data?.access
          );
          state.user = action.payload?.userObj.email;
          console.log("state.user after login:", state.user);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(checkUserEmail.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkUserEmail.fulfilled, (state, action) => {
        console.log("action payload from email confirm", action.payload);
        if (action.payload.error) {
          console.log("попали в email confirm ошибку if");
          state.wrongCodeError = true;
        }
        // если код правильный, в редаксе сетим переменную в success чтобы перейти на страницу
        if (action.payload?.status === 200) {
          state.emailConfirmStatus = "SUCCESS";
          state.status = null;
        }

        state.loading = false;
        state.logoutSuccess = null; // при повторной авторизации, logout success должно снова стать null;
      })
      .addCase(checkUserEmail.rejected, (state, action) => {
        state.loading = false;
        state.wrongCodeError = true;
        console.log("reducer checkUserEmail called");
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = null;
        console.log(
          "payload from logout user",
          action.payload,
          action.payload?.status
        );
        if (action.payload?.status === 200 || action.payload?.status === 204) {
          state.logoutSuccess = "SUCCESS";
          console.log(state.logoutSuccess);
          state.status = null; // сбрасываем стаус авторизации на null так как пользователь вышел из приложения
          state.user = null;
        }
        state.loading = false;
        state.emailConfirmStatus = null; //  сбарсываем в редаксе это поле, оно нам больше не нужно
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const {
  cleanErrorState,
  cleanStatusState,
  cleanUserState,
  confirmUserCode,
} = userSlice.actions;
export default userSlice.reducer;
