/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { loginInput } from "../Constant/Constant";
import FormInput from "../Utils/FormInput";
import { useContext, useLayoutEffect, useMemo, useState } from "react";
import { Button, ButtonToolbar } from "rsuite";
import { fetchRequest, getCookie, setCookie } from "../Constant/fetchRequest";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Constant/UserContext";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [values, setValues] = useState({
    emailId: "",
    password: "",
    userId: userId,
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(null);
  const [forgotPassword, setForgotPassword] = useState(false);
  const { userData } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(
    getCookie("userId") || false
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const filterValue = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, value.trim()])
  );
  useMemo(() => {
    setValues({
      ...values,
      ["userId"]: userId,
    });
  }, [userId]);
  useLayoutEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      setSuccessMsg("You're already logged in. Redirecting...");
      userData.isLoggedIn = true;
      var timer = setTimeout(() => {

        navigate(`/student/${getCookie("userId")}`, { replace: true });

        setIsLoading(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isLoggedIn]);
  const checkVerified = (data) => {
    setUserId(data.data.userId);
    setErrorMsg("User Not verified");
    setIsVerified(false);
  };
  const verifyUser = async () => {
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    fetchRequest(`${import.meta.env.VITE_API_URL}/verify`, "POST", filterValue)
      .then((res) => {
        res.code === 200 && setSuccessMsg(res.message);
      })
      .catch((err) => {
        setErrorMsg(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleSubmit = async (e) => {
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    e.preventDefault();
    await fetchRequest(
      `${import.meta.env.VITE_API_URL}/verify/login`,
      "POST",
      filterValue
    )
      .then((res) => {
        res.code === 200 &&
          setSuccessMsg("Login Successful, You're redirecting...");
        setCookie("userId", res.data.username, 7);
        setCookie("token", res.data.token, 7);
        userData.isLoggedIn = true;
        setIsLoggedIn(true);
      })
      .catch((err) => {
        err.code === "ERR_NETWORK" && setErrorMsg("Network Error");
        err.response.data.status === "not verified" &&
          checkVerified(err.response.data);
        err.response.data.status === "invalid credentials" &&
          setErrorMsg("Email or Password is Not Correct");
        err.response.data.status === "invalid credentials" && setForgotPassword(true);
        err.response.data.status === "Not found" &&
          setErrorMsg("User Not Found with this EmailId");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div
      className="max-w padding-md mx-auto mt mb shadow-3d-light radius-1"
      style={{ "--mwValue": 50 }}
    >
      {isLoggedIn ? (
        <div className="max-w mx-auto mt">
          <p className="mt tac t-success">{successMsg}</p>
          <Button
            loading={isLoading}
            appearance="primary"
            color="violet"
            className="mt mx-auto block"
          >
            Redirecting...
          </Button>
        </div>
      ) : (
        <>
          <h1 className="mb tac t-primary">Student Login</h1>
          <p className="mb tac t-balance">
            Don&apos;t have an account ?
            <Link to={"/register"}>Register</Link>
          </p>
          <form onSubmit={handleSubmit} method="POST" id="register-form">
            {loginInput.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            {isLoading ? (
              <Button loading appearance="primary" className="mt">
                Loading...
              </Button>
            ) : (
              isVerified === null && (
                <Button appearance="primary" type="submit" className="mt">
                  Login
                </Button>
              )
            )}
            {isVerified === false && (
              <ButtonToolbar className="mt">
                <Button
                  appearance="primary"
                  className="mt block"
                  onClick={verifyUser}
                  disabled={successMsg === "Mail sent"}
                >
                  Click to verify your account
                </Button>
                <Button
                  appearance="default"
                  className="mt block"
                  onClick={() => {
                    setErrorMsg("");
                    setSuccessMsg("");
                    setIsVerified(null);
                    setIsLoading(false);
                  }}
                >
                  Cancel
                </Button>
              </ButtonToolbar>
            )}
            {
              forgotPassword && (
                <p className="mt block"> Forgot Password ? <Link to={"/forgot-password"} className="t-primary link navLinks">Click here</Link> </p>
              )
            }
            <span className="t-success block mt mb">{successMsg}</span>
            <span className="t-danger block mt mb">{errorMsg}</span>
          </form>
        </>
      )}
    </div>
  );
}
