import { useLayoutEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
import { SvgCircle } from "../Utils/SvgCircle"
import PropTypes from 'prop-types'
import { fetchAdminRequest, fetchRequest, getCookie } from "../Constant/fetchRequest";
import { Button, Loader } from "rsuite";
export const Result = ({ id }) => {
  const [questionBank, setQuestionBank] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const attemptedQuestion = JSON.parse(
    localStorage.getItem("attemptedQuestion")
  );
  const [score, setScore] = useState(0);
  const [isGet, setIsGet] = useState(false);
  const calculateResult = async () => {
    attemptedQuestion.length > 0
      ? await attemptedQuestion.map((item, index) => {
        if (item.select === questionBank[index]["answer"]) {
          setScore((pre) => pre + 1);
        }
      })
      : alert("please try again");
    setIsGet(true);
  };
  useLayoutEffect(() => {
    setErrorMsg("");
    setIsLoading(true);
    setIsGet(false);
    fetchAdminRequest(`${import.meta.env.VITE_API_URL}/questions/resultAnalysis/${id}`, "POST", {
      adminId: import.meta.env.VITE_ADMIN_USERNAME
    }).then(res => {
      if (res.code === 200) {
        setQuestionBank(res.data.questions)
        setName(res.data.setName)
      }
    }).catch(err => {
      err.code === "ERR_BAD_REQUEST" && setErrorMsg(err?.response?.data?.message);
      err.code === "ERR_NETWORK" && setErrorMsg("Network Error");
    }).finally(() => {
      setIsLoading(false);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const saveResultHandler = async () => {
    setIsLoading(true);
    await fetchRequest(`${import.meta.env.VITE_API_URL}/saveScore/${getCookie("userId")}`, "POST", {
      score: score,
      time: new Date().toLocaleString(),
      qId: id,
      total: questionBank.length,
      name: name
    }).then(res => {
      if (res.code === 200) {
        localStorage.removeItem("attemptedQuestion");
        navigate("/student", { replace: true });
      }
    }).catch(err => {
      err.code === "ERR_NETWORK" && setErrorMsg("Network Error");
      err.code === "ERR_BAD_REQUEST" && setErrorMsg(err?.response?.data?.message);
    }).finally(() => {
      setIsLoading(false);
    })
  }
  return (
    <section className="result-page shadow-3d-light max-w mx-auto mt radius-1 padding-sm flex flex-col align-center gap-md" style={{ "--mwValue": 50, "--value": 3 }}>
      <h2 style={{ textAlign: "center" }}>
        Result of  test : {score} out of {questionBank.length}
      </h2>
      <Button appearance="primary"
        onClick={() => calculateResult()}
        disabled={isGet}
      >
        {isGet ? "Result Generated" : "Get Result"}
      </Button>
      {
        errorMsg && (
          <p className="t-danger mt ml mb t-bold padding-sm radius-1 max-w" style={{ backgroundColor: "rgba(255, 0, 0, 0.3)" }}>{errorMsg}</p>
        )
      }
      {isGet && !isLoading ? (
        <>
          <SvgCircle
            data={score}
            total={questionBank.length}
            text={((score / questionBank.length) * 100).toFixed(1)}
          />
          <Button loading={isLoading} appearance="primary" onClick={saveResultHandler}>Save Result and go to Dashboard</Button>
        </>
      ) :
        <Loader />
      }
    </section>
  );
};

Result.propTypes = {
  id: PropTypes.string.isRequired,
};