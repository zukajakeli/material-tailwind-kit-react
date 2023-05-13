import * as Yup from "yup";

export const registrationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8, "მინიმუმ 8 სიმბოლო").required(),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8, "მინიმუმ 8 სიმბოლო").required(),
});
