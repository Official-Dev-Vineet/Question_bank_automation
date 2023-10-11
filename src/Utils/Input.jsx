import PropTypes from "prop-types";
import { useState, memo } from "react";
// eslint-disable-next-line react/display-name
export const SearchInput = memo(({ type = "text" }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <input
        type={type}
        placeholder="Search here..."
        className={`input transition padding-sm radius-2 ${
          isFocused ? "shadow-3d-light" : ""
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </>
  );
});
SearchInput.propTypes = {
  type: PropTypes.string,
};
