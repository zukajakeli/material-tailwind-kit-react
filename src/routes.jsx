import { Home, Profile, SignIn, SignUp, ProfileEdit, AboutUs } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  NewspaperIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "მთავარი გვერდი",
    path: "/home",
    element: <Home />,
  },
  {
    icon: NewspaperIcon,
    name: "ჩვენ შესახებ",
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    icon: IdentificationIcon,
    name: "წევრები",
    path: "/members",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "პროფილი",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: null,
    name: "",
    path: "/profile-edit",
    element: <ProfileEdit />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: null,
    name: "",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
