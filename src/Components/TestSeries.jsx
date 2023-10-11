import { useEffect, useState } from "react"
import { Button, Loader} from "rsuite"
import { fetchAdminRequest } from "../Constant/fetchRequest"
import { useNavigate } from "react-router-dom"
const TestSeries = () => {
  const [testList, setTestList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    setErrorMsg("")
    setIsLoading(true)
    fetchAdminRequest(
      `${import.meta.env.VITE_API_URL}/questions/get`, "POST", {
      adminId: import.meta.env.VITE_ADMIN_USERNAME
    }
    ).then(res => {
      if (res.code === 200) {
        setTestList(res.data.questions.filter(q => q.isPublished === true))
      }
    }).catch(err => {
      setErrorMsg(err?.response?.data?.message)
      err.code === "ERR_NETWORK" && setErrorMsg("Network Error");
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="TestSeries shadow-3d-light max-w mx-auto mt mb padding-sm radius-1" style={{ "--mwValue": 120 }}>
      {
        isLoading ? <Loader /> : <>
          <h2 className="tac t-primary mb">
            Test Series
          </h2>
          <div className="line">
          </div>
          {
            errorMsg && <p className="t-danger mt ml mb t-bold padding-sm radius-1" style={{ backgroundColor: "rgba(255, 0, 0, 0.3)" }}>{errorMsg}</p>
          }
          <div className="flex flex-wrap gap-md">
            {
              testList.map((test, index) => {
                return <div key={index} className="shadow-3d-light padding-md radius-1 tac t-bold">
                  <h3 className="t-danger">{test.name}</h3>
                  <p className="t-bold t-capitalize"> Description : <span className="t-info">
                    {test.description}</span></p>
                  <p className="mb">Year : <span className="t-info">
                    {test.year}
                  </span></p>
                  <Button appearance="primary" color="cyan" onClick={() => navigate(`/student/test/${test._id}`)}>Enroll Now</Button>
                </div>
              })
            }
          </div>
        </>
      }
    </div>
  )
}

export default TestSeries