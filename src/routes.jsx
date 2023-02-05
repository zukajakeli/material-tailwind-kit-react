import {
  Home,
  Profile,
  SignIn,
  SignUp,
  ProfileEdit,
  AboutUs,
  Members,
} from "@/pages";
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
    element: <Members />,
  },
  {
    icon: UserCircleIcon,
    name: "პროფილი",
    path: "/profile",
    element: <Profile />,
  },

  {
    icon: ArrowRightOnRectangleIcon,
    name: "ავტორიზაცია",
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
