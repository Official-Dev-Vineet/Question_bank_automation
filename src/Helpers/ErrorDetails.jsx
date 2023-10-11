import { useRouteError } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { Button, ButtonToolbar } from "rsuite";
export const ErrorDetails = () => {
  const error = useRouteError();
  return (
    <div
      className="abs-center w-full h-full"
      style={{ backgroundColor: "var(--secondary" }}
    >
      <div className="shadow-3d-light padding-md radius-1 tac  abs-center max-w flex flex-col align-center gap-sm">
        <ButtonToolbar>
          <Button
            appearance="ghost"
            endIcon={<BiErrorCircle />}
            color="red"
            size="lg"
          >
            Oops
          </Button>
        </ButtonToolbar>
        <p>Sorry, an unexpected error has occurred.</p>
        <strong className="block t-dander t-balance">
          {error.statusText || error.message}
        </strong>
      </div>
    </div>
  );
};
