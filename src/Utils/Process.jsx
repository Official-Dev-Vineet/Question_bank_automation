import PropTypes from "prop-types";
import { BiSolidRightArrow } from "react-icons/bi";
const Process = ({ items }) => {
  return (
    <ol className="flex justify-center gap-sm margin-md flex-wrap">
      {items.map((item, index) => {
        if (index === items.length - 1) {
          return (
            <li key={index} className="t-bold">
              {item}
            </li>
          );
        }
        return (
          <li key={index} className="flex gap-sm align-center t-bold">
            {item} <BiSolidRightArrow className="t-primary" />
          </li>
        );
      })}
    </ol>
  );
};

export default Process;
Process.propTypes = {
  items: PropTypes.array.isRequired,
};
