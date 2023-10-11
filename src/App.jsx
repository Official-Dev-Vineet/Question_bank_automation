import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { RootLayOut } from "./Helpers/RootLayOut";
import { ErrorDetails } from "./Helpers/ErrorDetails";
import { LoaderComponent } from "./Utils/Loader";
import { getCookie } from "./Constant/fetchRequest";
import { StartTest } from "./Auth/StartTest"
import { UserContext } from "./Constant/UserContext";
import ResetPassword from "./Auth/ResetPassword";

export const App = () => {
  const [userData, setUserData] = useState(getCookie("userId") !== undefined && getCookie("token") !== undefined ? {
    id: getCookie("userId"),
    token: getCookie("token"),
    isLoggedIn: true,
  } : {
    id: "",
    token: "",
    isLoggedIn: false,
  });
  const Home = lazy(() => import("./Components/Home"));
  const About = lazy(() => import("./Components/About"));
  const Login = lazy(() => import("./Auth/Login"));
  const Register = lazy(() => import("./Auth/Register"));
  const TestSeries = lazy(() => import("./Components/TestSeries"));
  const Help = lazy(() => import("./Helpers/Help"));
  const Faq = lazy(() => import("./Helpers/Faq"));
  const PrivacyPolicy = lazy(() => import("./Helpers/PrivacyPolicy"));
  const PageNotFound = lazy(() => import("./Helpers/PageNotFound"));
  const Student = lazy(() => import("./Auth/Student"));
  const AdminLogIn = lazy(() => import("./Private/AdminLogIn"));
  const AdminPanel = lazy(() => import("./Private/AdminPanel"));
  const CreateQuestion = lazy(() => import("./Private/CreateQuestion"));
  const ViewQuestion = lazy(() => import("./Private/ViewQuestion"));
  const UserPayment = lazy(() => import("./Private/UserPayment"));
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />} errorElement={<ErrorDetails />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="test-series" element={<TestSeries />}>
          <Route path=":testName" element={<TestSeries />} />
        </Route>
        <Route path="help" element={<Help />} />
        <Route path="faq" element={<Faq />} />
        <Route path="terms" element={<PrivacyPolicy />} />
        <Route path="student" element={<Student />}>
          <Route path="test/:courseName" element={<Student />} />
          <Route path=":id" element={<Student />} />
          <Route path="result/:rId" element={<Student />} />
        </Route>
        <Route path="account">
          <Route path="test/:courseName" element={<StartTest />} />
        </Route>
        <Route path="admin" element={<AdminPanel />} >
          <Route path=":id" element={<AdminPanel />} />
        </Route>
        <Route path="admin-login" element={<AdminLogIn />} />
        <Route path="admin-createQuestion" element={<CreateQuestion />} />
        <Route path="admin-updateQuestion/:qId" element={<CreateQuestion />} />
        <Route path="admin-viewQuestion" element={<ViewQuestion />} />
        <Route path="admin-userPayment" element={<UserPayment />} />
        <Route path="forgot-password" element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Suspense fallback={<LoaderComponent />}>
        <RouterProvider router={routes} />
      </Suspense>
    </UserContext.Provider>
  );
};
