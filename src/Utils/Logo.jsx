import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";
export const Logo = ({size=100}) => {
  return (
    <div className="logo" style={{width: `${size}px`}}>
      <Link to="/">
        <img src={logo} alt="question bank logo" />
      </Link>
    </div>
  );
};
Logo.propTypes = {
  size: PropTypes.number
}
