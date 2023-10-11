import { useNavigate, useParams } from "react-router-dom"
import { fetchAdminRequest, getCookie } from "../Constant/fetchRequest"
import { useEffect, useState } from "react"
import FormInput from "../Utils/FormInput"
import { Button, Panel, PanelGroup } from "rsuite"
import { IoIosArrowRoundBack } from "react-icons/io"
const CreateQuestion = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isBasicFilled, setIsBasicFilled] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const { qId } = useParams()
  const [qCount, setQCount] = useState(0)
  const [series, setSeries] = useState(
    localStorage.getItem("series") ? JSON.parse(localStorage.getItem("series")) : {
      name: "",
      description: "",
      year: "",
      other: "",
      question: [],
      adminId: getCookie("adminId")
    }
  )
  const [questions, setQuestions] = useState({
    id: qCount,
    qName: "",
    answer: "",
    option: [],
  })
  const isLoggedIn = getCookie("adminToken")
  const navigate = useNavigate()
  useEffect(() => {
    isLoggedIn ? navigate("", { replace: true }) : navigate(`/admin-login`, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const saveQuestionsToLocalStorage = async () => {
    setSeries({
      ...series,
      question: [...series.question, {
        id: qCount,
        qName: questions.qName,
        answer: questions.answer,
        option: questions.option
      }],
    }
    )
    setSuccessMsg("Question added successfully")
    setQuestions({
      id: qCount,
      qName: "",
      answer: "",
      option: [],
    })
    setQCount(series.question.length + 2)
  }
  const nextHandler = async (e) => {
    setIsLoading(true)
    setErrorMsg("")
    setSuccessMsg("")
    e.preventDefault();
    if (isBasicFilled) {
      questions.qName.trim() === "" ? setErrorMsg("Please enter question name") :
        questions.answer.trim() === "" ? setErrorMsg("Please enter answer") :
          questions.option.length === 0 ? setErrorMsg("Please enter option") : saveQuestionsToLocalStorage()
    } else {
      series.name.trim() === "" ? setErrorMsg("Please enter test name") :
        series.description.trim() === "" ? setErrorMsg("Please enter test description") :
          series.year.trim() === "" ? setErrorMsg("Please enter test year") : series.name !== "" && series.description !== "" && series.year !== "" && setIsBasicFilled(true)
      setQCount(series.question.length + 1)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    series.question.length > 0 && localStorage.setItem("series", JSON.stringify(series))
  }, [series])
  const handleSubmit = (e) => {
    setIsLoading(true)
    setErrorMsg("")
    setSuccessMsg("")
    setIsBasicFilled(false)
    e.preventDefault()
    fetchAdminRequest(`${import.meta.env.VITE_API_URL}/questions`, "POST", series).then(res => {
      if (res.code === 201) {
        setSuccessMsg("Question Added Successfully")
      }
      localStorage.removeItem("series")
      setSeries({
        name: "",
        description: "",
        year: "",
        other: "",
        question: [],
        adminId: getCookie("adminId")
      })
    }).catch(err => {
      setErrorMsg(err?.response?.data?.message)
    }).finally(() => {
      setIsLoading(false)
    })
  }
  const editHandler = (id, index) => {
    setSeries({ ...series, question: [...series.question.slice(0, index), ...series.question.slice(index + 1)] })
    setIsBasicFilled(true);
    setQuestions(series.question[index])
    setQCount(id)
  }
  const updateHandler = (e) => {
    setIsLoading(true)
    setErrorMsg("")
    setSuccessMsg("")
    e.preventDefault()
    fetchAdminRequest(`${import.meta.env.VITE_API_URL}/questions/update/${qId}`, "POST", series).then(res => {
      if (res.code === 200) {
        setSuccessMsg("Question updated successfully")
      }
      localStorage.removeItem("series")
      setSeries({
        name: "",
        description: "",
        year: "",
        other: "",
        question: [],
        adminId: getCookie("adminId")
      })
      setQCount(0)
      setIsBasicFilled(false)
      navigate("/admin")
    }).catch(err => {
      setErrorMsg(err?.response?.data?.message)
    }).finally(() => {
      setIsLoading(false)
    })
  }
  const deleteHandler = (id) => {
    setIsLoading(true)
    setSeries({ ...series, question: [...series.question.filter(item => item.id !== id)] })
    setSuccessMsg("Question deleted successfully")
    setIsLoading(false)
  }
  return (
    <section className="CreateQuestion max-w mx-auto margin-lg padding-xl" style={{ "--mwValue": 120 }}>
      <h4 className="tac t-danger relative">
        <IoIosArrowRoundBack className="pointer absolute" style={{ top: "50%", left: "5px", transform: "translateY(-50%)" }} onClick={() => navigate("/admin", { replace: true })} />
        {qId ? "Edit" : "Create"} Question Form
      </h4>
      <div className="line">
      </div>
      <div className="form max-w mx-auto padding-sm radius-1 shadow-3d-light" style={{ "--mwValue": 50 }}>
        <form onSubmit={qId ? updateHandler : handleSubmit}>
          {isBasicFilled ? <>
            <h5 className="t-primary tac">
              Add Question {qCount}
            </h5>
            <FormInput name="qName" label="Question" type="text" value={questions.qName} onChange={e => setQuestions({ ...questions, qName: e.target.value })} />
            <FormInput name="answer" label="Answer" type="text" value={questions.answer} onChange={e => setQuestions({ ...questions, answer: e.target.value })} />
            <p className="mt t-warning">
              Please Add options separated by comma (,)
            </p>
            <FormInput name="option" label="Option" type="text" value={questions.option} onChange={e => setQuestions({ ...questions, option: e.target.value.split(",") })} />
            <Button appearance="primary" color="red" className="mt" type="submit">Finish</Button>
          </> :
            <>
              <h5 className="t-primary tac">basic details</h5>
              <FormInput name="name" required label="Test Name" type="text" value={series.name} onChange={e => setSeries({ ...series, name: e.target.value })} />
              <FormInput name="description" required label="Description" type="text" value={series.description} onChange={e => setSeries({ ...series, description: e.target.value })} />
              <FormInput name="year" label="Year" required type="number" value={series.year} onChange={e => setSeries({ ...series, year: e.target.value })} />
              <FormInput name="other" label="Other" type="text" value={series.other} onChange={e => setSeries({ ...series, other: e.target.value })} />
            </>}
          <Button loading={isLoading} appearance="primary" className="ml mt" onClick={nextHandler}>{isBasicFilled ? "Add" : "Next"}</Button>
          {
            successMsg && <p className="t-success mt t-bold">{successMsg}</p>
          }
          {
            errorMsg && <p className="t-danger mt t-bold">{errorMsg}</p>
          }
        </form>
      </div>
      {
        series.question.length > 0 ?
          <>
            <h3 className="t-bold tac mt">Total Added Questions : {series.question.length}</h3>
            <PanelGroup accordion bordered className="max-w mx-auto" style={{ "--mwValue": 80 }}>
              {
                series.question.map((item, index) => (
                  <Panel key={index} eventKey={index + 1} header={
                    <h5>
                      {`${index + 1}. ${item.qName}`}
                    </h5>
                  } shaded >
                    <p className="t-bold">
                      options :
                    </p>
                    <ul className="t-bold mt">
                      {
                        item.option.map((option, index) => (
                          <li key={index} className="t-bold t-info ml">{index + 1}. {option}</li>
                        ))
                      }
                    </ul>
                    <p className="ml t-bold mb">answer : <span className="t-success">
                      {item.answer}</span></p>
                    <Button appearance="primary" className="ml-auto block mt" onClick={() => deleteHandler(item.id)}>
                      Delete
                    </Button>
                    <Button appearance="primary" className="ml-auto block mt" onClick={() => editHandler(item.id, index)}>Edit</Button>
                  </Panel>
                ))
              }
            </PanelGroup>
          </>
          : null
      }

    </section>
  )
}
``
export default CreateQuestion