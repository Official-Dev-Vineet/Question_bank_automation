import { useContext, useLayoutEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/start-test.css";
import AttemptedQuestion from "./AttemptedQuestion";
import { GiHamburgerMenu } from "react-icons/gi";
import { Instruction } from "../Utils/Instruction";
import { UserContext } from "../Constant/UserContext";
import { fetchAdminRequest } from "../Constant/fetchRequest";
import { Button } from "rsuite";
export const StartTest = () => {
  const [isActive, setIsActive] = useState(false);
  const [attemptedQuestion, setAttemptedQuestion] = useState([]);
  const [questionBank, setQuestionBank] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [timeLeft, setTimeLeft] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { courseName } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const preventAuthorize = (e) => {
    e.preventDefault();
    if (e.key === "Escape") {
      setIsStarted(false);
      navigate(`/`, { replace: true });
    }
    if (e.keyCode === 91 || e.key === "Meta") {
      e.preventDefault();
    }
    if (e.key === "Fn") {
      e.preventDefault();
    }
    if (e.key === "F12") {
      e.preventDefault();
    }
  };
  const windowBlurHandler = () => {
    setIsStarted(false);
    navigate(`/student`, {
      replace: true,
    });
  }
  useLayoutEffect(() => {
    !userData.isLoggedIn
      ? navigate(
        `/student`,
        {
          replace: true,
        },
      )
      : null;
    if (window.outerWidth !== window.innerWidth) {
      alert("Please Close DevTools and Reload");
      navigate(`/student`, {
        replace: true
      })
    }
    window.addEventListener("blur", windowBlurHandler);
    document.title = `Test of ${courseName}`;
    document.body.oncontextmenu = () => false;
    window.addEventListener("keydown", preventAuthorize);
    return () => {
      window.removeEventListener("keydown", preventAuthorize);
      window.removeEventListener("blur", windowBlurHandler);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const nextQuestionHandler = () => {
    setIsSelected(false);
    setSelectedAnswer("");
    if (currentQuestion < questionBank.length) {
      setAttemptedQuestion([
        ...attemptedQuestion,
        {
          question: questionBank[currentQuestion].qName,
          select: selectedAnswer,
        },
      ]);
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  useLayoutEffect(() => {
    isStarted && currentQuestion === questionBank.length && goToResultHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);
  const goToResultHandler = () => {
    setIsStarted(false);
    localStorage.setItem(
      "attemptedQuestion",
      JSON.stringify(attemptedQuestion)
    );
    navigate(`/student/result/${courseName}`, { replace: true });
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds =
      secondsRemaining < 10 ? `0${secondsRemaining}` : `${secondsRemaining}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  const timer = useMemo(() => {
    return formatTime(timeLeft);
  }, [timeLeft]);
  useLayoutEffect(() => {
    if (timeLeft <= 0) {
      localStorage.setItem(
        "attemptedQuestion",
        JSON.stringify(attemptedQuestion)
      );
      navigate(`/student/result/${courseName}`, { replace: true });
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStarted, timeLeft]);
  useLayoutEffect(() => {
    fetchAdminRequest(`${import.meta.env.VITE_API_URL}/questions/startTest/${courseName}`, "POST", {
      adminId: import.meta.env.VITE_ADMIN_USERNAME
    }).then(res => {
      setQuestionBank(res.data.questions.question)
    }).catch(err => {
      err.code === "ERR_NETWORK" && setErrorMsg("Network Error");
      err.code === "ERR_BAD_REQUEST" && setErrorMsg(err?.response?.data?.message);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="start-test">
      <AttemptedQuestion questions={attemptedQuestion} activeState={isActive} />
      <div
        className={`bar ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <GiHamburgerMenu />
      </div>
      <div className="question-container">
        <div
          className="flex flex-between gap-md"
          style={{ padding: "10px 20px" }}
        >
          {isStarted ? (
            <h2
              style={{
                margin: "2.5px 10px",
              }}
            >
              Question {currentQuestion + 1} of {questionBank.length}
            </h2>
          ) : (
            <div>
              <Button appearance="primary"
                className="ml"
                onClick={() => {
                  setIsStarted(true);
                  setTimeLeft(questionBank.length * 60);
                }}
              >
                Start Test
              </Button>
              <Instruction />
            </div>
          )}
          {isStarted ? <p className="ml-auto t-danger t-bold">Time Left : {timer}</p> : null}
        </div>
        <div className="line"></div>
        {
          errorMsg && (
            <p className="t-danger mt ml mb t-bold padding-sm radius-1 max-w" style={{ backgroundColor: "rgba(255, 0, 0, 0.3)" }}>{errorMsg}</p>
          )
        }
        {isStarted && (
          <>
            <h4 className="question mb">
              {currentQuestion + 1}. {questionBank[currentQuestion]?.qName}
            </h4>
            <ul className="">
              {questionBank[currentQuestion]?.option.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`option shadow-3d-light t-bold padding-sm radius-1 ${selectedAnswer === item ? "selected" : ""
                      }`}

                    onClick={() => {
                      setSelectedAnswer(item);
                      setIsSelected(true);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <Button
              appearance="primary"
              onClick={() => nextQuestionHandler()}
              disabled={!isSelected}
              className={!isSelected ? "btn disabled" : "btn"}
            >
              Next
            </Button>
          </>
        )}
      </div>
    </section>
  );
};
