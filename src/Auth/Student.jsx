import { useContext, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../Constant/UserContext";
import CourseDetails from "./courseDetails";
import {
  deleteCookie,
  fetchRequest,
  getCookie,
} from "../Constant/fetchRequest";
import { Button, Loader } from "rsuite";
import { Result } from "./Result";

const Student = () => {
  const { userData } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    username: "",
    emailId: "",
    address: "",
    contactNumber: "",
    role: "",
    fullName: "",
    score: [],
  });
  const navigate = useNavigate();
  const { courseName, rId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useLayoutEffect(() => {
    setIsLoading(true);
    !userData.isLoggedIn && navigate("/login");
    userData.isLoggedIn &&
      fetchRequest(
        `${import.meta.env.VITE_API_URL}/user/username/${getCookie("userId")}`,
        "GET"
      )
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((err) => {
          err.code === "ERR_BAD_REQUEST" && navigate("/login");
          deleteCookie("token");
          deleteCookie("userId");
        }).finally(() => {
          setIsLoading(false);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const logoutHandler = () => {
    const confirm = window.confirm("Are you sure you want to logout");
    if (confirm) {
      deleteCookie("token");
      deleteCookie("userId");
      navigate("/login", { replace: true });
    }
  };
  return (
    <section
      className="max-w mx-auto shadow-3d-light padding-md mt mb radius-1"
      style={{ "--mwValue": 120 }}
    >
      <h1 className="tac t-primary">Student</h1>
      <div className="line"></div>
      {!userData.isLoggedIn && (
        <>
          <p
            className="t-danger mt ml mb t-bold padding-sm radius-1 max-w"
            style={{ backgroundColor: "rgba(255, 0, 0, 0.3)" }}
          >
            Please Login First
          </p>
          <Button
            appearance="primary"
            onClick={() => navigate("/login")}
            className="ml"
          >
            Login
          </Button>
        </>
      )}
      {userData.isLoggedIn && userInfo.username !== "" && !isLoading ? (
        <Button
          className="ml mb"
          appearance="primary"
          color="red"
          onClick={() => logoutHandler()}
        >
          LogOut
        </Button>
      ) :
        <div className="flex justify-center align-center">
          <Loader />
        </div>
      }
      {userData.isLoggedIn && userInfo.username !== "" && (
        <div className="flex flex-wrap gap-lg align-center justify-center mt">
          <div className="t-bold shadow-3d-light padding-sm radius-1 max-w w-full flex-grow-up" >
            <h4>Fullname </h4>
            <span className="t-primary ml mt">{userInfo.fullName}</span>
          </div>
          <div className="t-bold shadow-3d-light padding-sm radius-1 max-w w-full flex-grow-up" >
            <h4>Username </h4>
            <span className="t-primary ml mt">{userInfo.username}</span>
          </div>
          <div className="t-bold shadow-3d-light padding-sm radius-1 max-w w-full flex-grow-up" >
            <h4>Email </h4>
            <span className="t-primary ml mt">{userInfo.emailId}</span>
          </div>
          <div className="t-bold shadow-3d-light padding-sm radius-1 max-w w-full flex-grow-up" >
            <h4>Address </h4>
            <span className="t-primary ml mt">{userInfo.address}</span>
          </div>
          <div className="t-bold shadow-3d-light padding-sm radius-1 max-w w-full flex-grow-up" >
            <h4>Contact Number </h4>
            <span className="t-primary ml mt">{userInfo.contactNumber}</span>
          </div>
          <div className="t-bold shadow-3d-light padding-sm radius-1 max-w w-full flex-grow-up" >
            <h4>Dream Job</h4>
            <span className="t-primary ml mt">{userInfo.role}</span>
          </div>
        </div>
      )
      }
      <div className="line"></div>
      {userInfo.score.length > 0 && (
        <h4 className="tac mt mb">Previous Score</h4>
      )}
      {userInfo.score.length > 0 && (
        <div className="scroll">
          <table
            className="w-full tac shadow-3d-light mx-auto radius-1 max-w"
            style={{ "--mwValue": 90 }}
          >
            <thead className="t-primary">
              <tr>
                <th className="padding-sm">Sr no.</th>
                <th className="padding-sm">Name</th>
                <th className="padding-sm">Time</th>
                <th className="padding-sm">Score</th>
                <th className="padding-sm">Total</th>
              </tr>
            </thead>
            <tbody>
              {userInfo.score.map((item, index) => {
                return (
                  <tr key={index} className="padding-md">
                    <td className="padding-sm">{index + 1}</td>
                    <td className="padding-sm">{item.name}</td>
                    <td className="padding-sm">{item.time}</td>
                    <td className="padding-sm">{item.score}</td>
                    <td className="padding-sm">{item.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {courseName && userData.isLoggedIn && (
        <CourseDetails courseName={courseName} />
      )}
      {rId && userData.isLoggedIn && <Result id={rId} />}
    </section>
  );
};

export default Student;
