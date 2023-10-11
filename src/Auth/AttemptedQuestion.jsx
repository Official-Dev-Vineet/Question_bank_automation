import PropTypes from "prop-types";
import { memo } from "react";
// eslint-disable-next-line react-refresh/only-export-components
const AttemptedQuestion = ({ questions, activeState }) => {
  const answerToggler = (e) => {
    document.querySelectorAll(".answer").forEach((item) => {
      item.classList.remove("show");
      e.currentTarget.querySelector(".answer").classList.add("show");
    });
  };  
  return (
    <aside className={activeState ? "active" : ""}>
      <div className="sidebar-item">
        <h2 className="tac">Attempted</h2>
        {questions.length > 0 ? (
          <ul className="attempted-question">
            {questions.map((item, index) => {
              return (
                <li key={index} onClick={(e) => answerToggler(e)} className="t-primary padding-sm radius-1 shadow-3d-light">
                  <span>
                    {index + 1}. {item.question}
                  </span>
                  <span className={`answer`}>
                    You answered: <strong> {item.select}</strong>
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            {" "}
            No Question Attempted{" "}
          </p>
        )}
      </div>
    </aside>
  );
};

AttemptedQuestion.propTypes = {
  questions: PropTypes.array.isRequired,
  activeState: PropTypes.bool.isRequired,
};
const exportAtt = memo(AttemptedQuestion);
export default exportAtt