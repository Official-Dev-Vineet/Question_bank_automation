import { Link } from "react-router-dom";
import Banner from "../Utils/Banner";
import Header from "../Utils/Header";
import { Button } from "rsuite";
import { VscDebugStart } from "react-icons/vsc";
import Process from "../Utils/Process";
import WhyChooseUs from "../Helpers/WhyChooseUs";

export default function Home() {
  const process = [
    "Learn",
    "Take Test",
    "Get Score",
    "Compare Result",
    "Take Test Again",
    "Get Success",
  ];
  return (
    <div>
      <Banner />
      <Header title="One Destination for All Type of Competitive Exam Preparation">
        <p
          className="margin-sm t-bold t-opacity"
          style={{ "--bValue": 500, "--oValue": 0.9 }}
        >
          Let&apos;s get your careers journey with us
        </p>
        <Process items={process} />
        <Link to="/test-series" className="transition margin-sm link">
          <Button appearance="primary" endIcon={<VscDebugStart />}>
            Get Start
          </Button>
        </Link>
      </Header>
      <WhyChooseUs />
    </div>
  );
}
