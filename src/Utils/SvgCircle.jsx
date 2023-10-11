import PropTypes from "prop-types";

export const SvgCircle = ({ data, total, text }) => {
  // Define SVG circle attributes based on the data
  const centerX = 75; // X-coordinate of the center
  const centerY = 75; // Y-coordinate of the center
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (data / total) * circumference;

  return (
    <div className="result-circle">
      <svg>
        <circle cx={centerX} cy={centerY} r={radius} />
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          style={{
            strokeDasharray,
            strokeDashoffset,
            stroke: "var(--primary)",
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
        <text x={centerX} y={centerY} className="svg-text">{text}%</text>
      </svg>
    </div>
  );
};

SvgCircle.propTypes = {
  data: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
