import PropTypes from "prop-types";
import { Panel, PanelGroup } from "rsuite";
const AboutOurTestSeries = ({ details, active }) => {
  return (
    <PanelGroup accordion defaultActiveKey={active}>
      {details.map((item, index) => (
        <Panel key={index} eventKey={index + 1} 
        header={`${index+1}. ${item.title}`}
        shaded
        >
          <p className="ml t-opacity">{item.description}</p>
        </Panel>
      ))}
    </PanelGroup>
  );
};

export default AboutOurTestSeries;
AboutOurTestSeries.propTypes = {
  details: PropTypes.array.isRequired,
  active: PropTypes.number
};
