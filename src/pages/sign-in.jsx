import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
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
import { loginSchema } from "@/utils/validationSchema";
import { useUser } from "@/context/context";

export function SignIn() {
  const navigate = useNavigate();
  const auth = getAuth();
  const setUserInfo = useUser((state) => state.setUserInfo);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
    validationSchema: loginSchema,
  });

  const handleLogin = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
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
        <form className="w-full max-w-lg" onSubmit={formik.handleSubmit}>
          <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                ავტორიზაცია
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
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
            
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" type="submit" fullWidth>
                ავტორიზაცია
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                არ ხარ დარეგისტრირებული?
                <Link to="/sign-up">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                   რეგისტრაცია
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        {/* <SimpleFooter /> */}
      </div>
    </>
  );
}

export default SignIn;
