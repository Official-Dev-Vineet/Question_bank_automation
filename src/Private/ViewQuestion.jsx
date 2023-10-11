import { useNavigate } from "react-router-dom"
import { fetchAdminRequest, getCookie } from "../Constant/fetchRequest"
import { useEffect, useState } from "react"
import { Button, ButtonToolbar } from "rsuite";

const ViewQuestion = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [series, setSeries] = useState([]);
  const isLoggedIn = getCookie("adminToken")
  const navigate = useNavigate()
  useEffect(() => {
    isLoggedIn ? navigate("", { replace: true }) : navigate(`/admin-login`, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const loadData = async () => {
    setIsLoading(true)
    setErrorMsg("")
    setSuccessMsg("")
    await fetchAdminRequest(
      `${import.meta.env.VITE_API_URL}/questions/get`, "POST", {
      adminId: getCookie("adminId")
    }
    ).then(res => {
      if (res.code === 200) {
        setSeries(res.data.questions)
      }
    }).catch(err => {
      setErrorMsg(err?.response?.data?.message)
    }).finally(() => {
      setIsLoading(false)
    })
  }
  const updateData = async (id, data) => {
    setIsLoading(true)
    await fetchAdminRequest(
      `${import.meta.env.VITE_API_URL}/questions/update/${id}`, "POST", data
    ).then(res => {
      if (res.code === 200) {
        loadData()
        setSuccessMsg(res.message)
      }
    }).catch(err => {
      setErrorMsg(err?.response?.data?.message)
    }).finally(() => {
      setIsLoading(false)
    })
  }
  const deleteData = async (id) => {
    setIsLoading(true)
    await fetchAdminRequest(
      `${import.meta.env.VITE_API_URL}/questions/delete/${id}`, "POST", {
      adminId: getCookie("adminId")
    }
    ).then(res => {
      if (res.code === 200) {
        loadData()
        setSuccessMsg(res.message)
      }
    }).catch(err => {
      setErrorMsg(err?.response?.data?.message)
    }).finally(() => {
      setIsLoading(false)
    })
  }
  const editHandler = (id, item) => {
    localStorage.setItem("series", JSON.stringify(item))
    navigate(`/admin-updateQuestion/${id}`)
  }
  return (
    <section className="AdminPanel mx-auto max-w margin-lg padding-xl" style={{ "--mwValue": 120 }}>
      <h3 className="tac">
        All Questions Set Data
      </h3>
      <div className="line"></div>
      <ButtonToolbar>
        <Button loading={isLoading} appearance="primary" onClick={loadData}>Load</Button>
      </ButtonToolbar>{
        errorMsg && <p className="t-danger mt ml mb t-bold padding-sm radius-1" style={{ backgroundColor: "rgba(255, 0, 0, 0.3)" }}>{errorMsg}</p>
      }
      {
        successMsg && <p className="t-success mt ml mb t-bold padding-sm radius-1" style={{ backgroundColor: "rgba(0, 255, 0, 0.3)" }}>{successMsg}</p>
      }
      {
        series.length > 0 && series.map((item) => {
          return (
            <div key={item._id} className="shadow-3d-light padding-sm mt radius-1" style={{ "--value": 3 }}>
              <header className="tac">
                <h4>
                  Question Set Name : <span className="t-primary">
                    {item.name}
                  </span>
                </h4>
              </header>
              <p className="t-bold">
                Description : <span className="t-primary">
                  {item.description}
                </span>
              </p>
              <p className="t-bold">
                isPublished : <Button appearance="primary" color={item.isPublished ? "red" : "green"}
                  onClick={() => {
                    updateData(item._id, {
                      isPublished: !item.isPublished,
                      adminId: getCookie("adminId")
                    })
                  }}
                >{!item.isPublished ? "Publish" : "UnPublish"}  </Button>
              </p>
              <p className="t-bold mb">
                Year : <span className="t-primary">
                  {item.year}
                </span>
              </p>
              <ButtonToolbar>
                <Button appearance="primary" color="violet" loading={isLoading} onClick={() => editHandler(item._id, item)}>
                  Update
                </Button>
                <Button appearance="primary" color="red" loading={isLoading} onClick={() => deleteData(item._id)}>
                  Delete
                </Button>
              </ButtonToolbar>
              <h5 className="mb mt">
                Questions List in This Set : <span className="t-primary t-bold">
                  {item.question.length}
                </span>
              </h5>
              <div className="flex gap-md flex-wrap">
                {
                  item.question.map((question, index) => {
                    return (
                      <div key={index} className="t-bold inline-block shadow-3d-light flex-grow-up padding-sm radius-2">
                        <p className="mt">
                          {index + 1}. {question.qName}
                        </p>
                        <p className="ml">
                          Ans. <span className="t-warning">
                            {question.answer}
                          </span>
                        </p>
                        <span className="ml t-bold mb mt">
                          options :
                        </span>
                        <ul className="ml">
                          {
                            question.option.map((option, index) => {
                              return (
                                <li key={index} className="ml">
                                  {index + 1}. {option}
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </section>

  )
}

export default ViewQuestion