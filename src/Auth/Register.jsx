import { useEffect, useState } from "react";
import FormInput from "../Utils/FormInput";
import { Link } from "react-router-dom";
import { Button } from "rsuite";
import { registerInput } from "../Constant/Constant";
import { fetchRequest, getCookie } from "../Constant/fetchRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const id = getCookie("userId");
  const token = getCookie("token");
  const isLoggedIn = id !== undefined && token !== undefined ? true : false

  const navigate = useNavigate();
  useEffect(() => {
    isLoggedIn && navigate("/student")
    const timer = setTimeout(() => {
      isUserCreated && navigate("/login")
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, isUserCreated])
  const [values, setValues] = useState({
    fullName: "",
    username: "",
    emailId: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const trimValue = (value) => {
    return value.trim();
  };
  const filterValue = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, trimValue(value)])
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    await fetchRequest(
      `${import.meta.env.VITE_API_URL}/user`,
      "POST",
      filterValue
    ).then(res => {
      console.log(res)
      if (res.code === 201) {
        setIsLoading(false);
        setIsUserCreated(true);
        setSuccessMsg("Account Successfully, You are Redirecting to login Page, Please enter Your emailId and Password to next login page And verify Your Account")
      }
    }).catch(err => {
      console.log(err)
      err.response.data.code === 409 ? setErrorMsg("Email Id is already exist in our database") :
        err.code === "ERR_BAD_REQUEST" && setErrorMsg(err?.response?.data?.message?.message);
    }).finally(() => {
      setIsLoading(false);
    })
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <div
      className="max-w padding-md mx-auto mt mb shadow-3d-light radius-1"
      style={{ "--mwValue": 50 }}
    >
      <h1 className="mb tac t-primary">Register</h1>
      <p className="mb tac t-balance">
        Already have an account? <Link to={"/login"}>Login</Link>{" "}
      </p>
      <hr />
      <form onSubmit={handleSubmit} method="POST" id="register-form">
        {registerInput.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {isLoading ? (
          <Button appearance="primary" loading className="mt">
            Loading...
          </Button>
        ) : isUserCreated ? (
          <div className="mt">
            <p className="t-success">
              Your account has been created successfully
            </p>
            <Link to={"/login"}>
              <Button appearance="primary" className="mt">
                User Created
              </Button>
            </Link>
          </div>
        ) : (
          <Button appearance="primary" className="mt" type="submit">
            Register
          </Button>
        )}
        {
          errorMsg !== "" && <p className="mt t-danger" >
            {
              errorMsg
            }
          </p>
        }
        {
          successMsg !== "" && <p className="mt t-success" >
            {
              successMsg
            }
          </p>
        }
      </form>
    </div>
  );
};

export default Register;
