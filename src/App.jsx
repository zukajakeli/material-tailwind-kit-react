import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import "../firebase.config";
import { useUser } from "./context/context";
import {
  AboutUs,
  Home,
  Members,
  Profile,
  ProfileEdit,
  SignIn,
  SignUp,
} from "./pages";
import News from "./pages/news";
import AddNews from "./pages/add-news";

function App() {
  const auth = getAuth();
  const setUserInfo = useUser((state) => state.setUserInfo);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
        user.getIdToken().then((token) => {
          localStorage.setItem("authToken", token);
        });
        setUserInfo(user);
      } else {
        localStorage.setItem("authToken", "");
      }
    });
  }, []);

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/members" element={<Members />} />
        <Route path="profile">
          <Route path=":userId?" element={<Profile />} />
          <Route path="" element={<Profile />} />
        </Route>

        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
