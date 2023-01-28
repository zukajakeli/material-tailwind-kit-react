import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import "../firebase.config";
import { useUser } from "./context/context";

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
  }, [auth]);

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
