import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { registrationSchema } from "@/utils/validationSchema";
import { useUser } from "@/context/context";

export function SignUp() {
  const setUserInfo = useUser((state) => state.setUserInfo);
  const auth = getAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleRegister(values);
    },
    validationSchema: registrationSchema,
  });

  const handleRegister = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserInfo(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>

          <form className="w-full max-w-lg" onSubmit={formik.handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Input
                variant="standard"
                label="Name"
                size="lg"
                id="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.userName)}
              />
              <Input
                variant="standard"
                type="email"
                label="Email"
                size="lg"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
              />
              <Input
                variant="standard"
                type="password"
                label="Password"
                size="lg"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.password)}
              />
              <div className="-ml-2.5">
                <Checkbox label="I agree the Terms and Conditions" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                fullWidth
                type="submit"
                // onClick={handleRegister}
              >
                Sign Up
              </Button>

              <Typography variant="small" className="mt-6 flex justify-center">
                Already have an account?
                <Link to="/sign-in">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign in
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
