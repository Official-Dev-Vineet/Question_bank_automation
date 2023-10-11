import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const List = ({ title, items }) => {
  return (
    <div className="max-w" style={{ "--value": 20 }}>
      <h3 className="mb">{title}</h3>
      <ul className="list flex gap-sm flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="inline-block list-item">
            <Link to={item.url} className="transition link pr">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
};
