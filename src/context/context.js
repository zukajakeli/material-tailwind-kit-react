import { create } from "zustand";

const initialUserState = { token: "", uid: "", email: "" };

export const useUser = create((set) => ({
  token: "",
  uid: "",
  email: "",
  isAuthenticated: false,
  isAdmin: true,
  setUserInfo: (payload) =>
    set((state) => ({
      ...state,
      token: payload.accessToken,
      uid: payload.uid,
      email: payload.email,
      isAuthenticated: true,
    })),

  reset: () => {
    set(initialUserState);
  },
}));
