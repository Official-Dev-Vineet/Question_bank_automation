import { useNavigate } from "react-router-dom"
import { deleteCookie, getCookie } from "../Constant/fetchRequest"
import { useEffect, useState } from "react"
import { Button, ButtonToolbar } from "rsuite"
import ViewQuestion from "./ViewQuestion"
const AdminPanel = () => {
  const isLoggedIn = getCookie("adminToken")
  const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    isLoggedIn ? navigate("", { replace: true }) : navigate(`/admin-login`, { replace: true })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const logoutHandler = () => {
    const confirm = window.confirm("Are you sure you want to logout")
    if (confirm) {
      deleteCookie("adminToken")
      deleteCookie("adminId")
      navigate("/admin-login", { replace: true })
    }
  }
  return (
    <div className="AdminPanel mx-auto max-w margin-lg padding-xl" style={{ "--mwValue": 120 }}>
      <h2 className="tac">
        Welcome to admin panel you logged in as <span className="t-primary">
          {getCookie("adminId")}
        </span>
      </h2>
      <div className="line"></div>
      <ButtonToolbar>
        <Button appearance="primary" onClick={() => navigate("/admin-createQuestion", { replace: true })}>
          Add New
        </Button>
        <Button appearance="primary" onClick={() => setIsShow(pre => !pre)}>
          {
            isShow ? "Hide" : "Show"
          }
        </Button>
        <Button appearance="primary" color="red" className="ml-auto" onClick={logoutHandler}>
          Logout
        </Button>
      </ButtonToolbar>
      {
        isShow && <ViewQuestion />
      }
    </div>
  )
}

export default AdminPanel