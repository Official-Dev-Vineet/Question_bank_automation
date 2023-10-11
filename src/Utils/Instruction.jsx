export const Instruction = () => {
  return (
    <section className="instruction shadow-3d-light radius-2 padding-md mt mb" style={{ "--value": 2 }}>
      <h3 className="t-danger tac">Instructions</h3>
      <ul className="flex flex-col gap-sm t-bold t-capitalize">
        <li >Click on Start button to start test.</li>
        <li>Click on Next button to move to next question.</li>
        <li>After started test,you can&apos;t change your tab or window.</li>
        <li>
          If you change your window or tab after started test,you will lose test
          result. and you have to login again.
        </li>
        <li>
          you can also check your attempted question by clicking on Attempted
          Question in left side.
        </li>
      </ul>
    </section>
  );
};
