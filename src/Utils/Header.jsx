import PropTypes from "prop-types"
const Header = ({ title, children }) => {
  return (
    <header className="tac padding-lg">
      <h1>{title}</h1>
      {children}
    </header>
  );
};

export default Header;
Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
