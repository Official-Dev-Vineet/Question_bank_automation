import { useContext, useState } from "react"
import { UserContext } from "../Constant/UserContext"
import FormInput from "../Utils/FormInput";
import { Button } from "rsuite";
import { loginInput } from "../Constant/Constant"
import { fetchAdminRequest, getCookie, setCookie } from "../Constant/fetchRequest";
import RedirectPopUP from "../Helpers/UserLogInPopUP";

const AdminLogIn = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(getCookie("adminToken"));
  const { userData } = useContext(UserContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    e.preventDefault();
    fetchAdminRequest(`${import.meta.env.VITE_API_URL}/admin/login`, "POST", values).then(res => {
      if (res.code === 200) {
        setIsLoading(false);
        setCookie("adminToken", res.data.token, 1);
        setCookie("adminId", res.data.username, 1);
        setSuccessMsg(res.data.message);
        setIsAdminLoggedIn(true);
      }
    }).catch(err => {
      setErrorMsg(err?.response?.data?.message);
      err.code === "ERR_NETWORK" && setErrorMsg("Network Error");
    }).finally(() => {
      setIsLoading(false);
    })
  }

  return (
    <div className="admin-login">
      {
        userData.isLoggedIn ? <RedirectPopUP id={userData.id} link="/student" /> :
          !isAdminLoggedIn ?
            <div className="admin-login-form max-w mx-auto mt mb shadow-3d-light padding-md radius-1" style={{ "--mwValue": 40, "--value": 4 }}>
              <h3 className="tac t-primary mb">
                Admin Login Page
              </h3>
              <div className="line"></div>
              <form onSubmit={handleSubmit}>
                {
                  loginInput.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={handleChange}
                    />
                  ))}
                <Button loading={isLoading} appearance="primary" type="submit" className="mt">
                  Login
                </Button>
                {
                  errorMsg && <p className="t-danger mt t-capitalize">{errorMsg}</p>
                }{
                  successMsg && <p className="t-success mt t-capitalize">{successMsg}</p>
                }
              </form>
            </div> : <RedirectPopUP id={getCookie("adminId")} link="/admin" />

      }
    </div>
  )
}

export default AdminLogIn