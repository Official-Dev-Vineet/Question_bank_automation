import { Link } from "react-router-dom";
import { PanelGroup, Panel } from "rsuite";

const Faq =() => (
  <div
    className="faq padding-xl max-w w-full mx-auto"
    style={{ "--mwValue": 120 }}
  >
    <PanelGroup accordion defaultActiveKey={1}>
      <Panel
        header="What is a test series website, and why should I use it?"
        shaded
        eventKey={1}
      >
        <p className="ml t-opacity t-balance">
          A test series website offers a platform for students and professionals
          to take practice exams and assessments in various subjects and fields.
          It helps you prepare for exams by providing a simulated testing
          environment, allowing you to evaluate your knowledge and identify
          areas for improvement.
        </p>
      </Panel>
      <Panel
        header="What sets your test series website apart from others?"
        eventKey={2}
        shaded
      >
        <p className="ml t-opacity t-balance">
          Our website is designed with user-friendly features, an extensive
          question bank, and advanced analytics. We provide a seamless and
          comprehensive learning experience to help you excel in your exams.
        </p>
      </Panel>
      <Panel header="How diverse is your question bank?" eventKey={3} shaded>
        <p className="ml t-opacity t-balance">
          Our question bank covers a wide range of subjects, topics, and levels
          of difficulty. Whether you&apos;re preparing for competitive exams,
          school tests, or professional certifications, we have a variety of
          questions to suit your needs.
        </p>
      </Panel>
      <Panel header="How do I get started?" eventKey={4} shaded>
        <p className="ml t-opacity t-balance">
          Simply visit our website and create an account. You can then start
          taking practice tests and assessments to improve your knowledge and
          prepare for your exams.
        </p>
      </Panel>
      <Panel
        header="Are your questions created by experts?"
        eventKey={5}
        shaded
      >
        <p className="ml t-opacity t-balance">
          Yes, our questions are curated and created by subject matter experts,
          teachers, and professionals with extensive knowledge in their
          respective fields. This ensures the quality and accuracy of the
          content.
        </p>
      </Panel>
      <Panel
        header="Can I track my progress on your website?"
        eventKey={6}
        shaded
      >
        <p className="ml t-opacity t-balance">
          Absolutely! We offer detailed progress tracking features that allow
          you to monitor your performance over time. You can review your scores,
          identify areas where you need improvement, and track your progress
          toward your goals.
        </p>
      </Panel>
      <Panel
        header="Is there any flexibility in the test scheduling?"
        eventKey={7}
        shaded
      >
        <p className="ml t-opacity t-balance">
          Yes, our platform is designed to accommodate your schedule. You can
          access tests and practice materials 24/7, allowing you to study at
          your own pace and convenience.
        </p>
      </Panel>
      <Panel header="What is your refund policy?" eventKey={8} shaded>
        <p className="ml t-opacity t-balance">
          We offer a 100% money-back guarantee on all our products. If you are
          not satisfied with our services, you can request a refund within 30
          days of purchase.
        </p>
      </Panel>
      <Panel
        header="How do you ensure the security and privacy of user data?"
        eventKey={9}
        shaded
      >
        <p className="ml t-opacity t-balance">
          We take data security and privacy seriously. Our website employs
          robust encryption and security measures to protect your personal
          information and test results. Your data is confidential and will not
          be shared without your consent.
        </p>
      </Panel>
      <Panel
        header="Do you offer customer support and assistance?"
        eventKey={10}
        shaded
      >
        <p className="ml t-opacity t-balance">
          Yes, we offer 24/7 customer support and assistance. Our team is
          available to assist you with any questions or concerns you may have.
          you can contact us at any time by using our{" "}
          <Link to="/contact">contact form</Link>.
        </p>
      </Panel>
      <Panel header="What payment options are available?" eventKey={11} shaded>
        <p className="ml t-opacity t-balance">
          We accept a variety of payment methods, including credit cards, debit
          cards, and e-wallets. You can choose the method that best suits your
          needs and preferences.
        </p>
      </Panel>
      <Panel header="How do I cancel my subscription?" eventKey={12} shaded>
        <p className="ml t-opacity t-balance">
          You can cancel your subscription at any time. Simply visit our
          <Link to="/contact">contact form</Link> and submit a request to cancel
          your subscription.
        </p>
      </Panel>
      <Panel
        header="Do you offer any discounts or promotions?"
        eventKey={13}
        shaded
      >
        <p className="ml t-opacity t-balance">
          Yes, we frequently offer discounts and promotions to make our services
          more affordable for our users. Be sure to check our website and
          subscribe to our <Link to={"/contact"}>News letter</Link> for updates
          on special offers.
        </p>
      </Panel>
      <Panel
        header="Can I try your service before making a commitment?"
        eventKey={14}
      >
        <p className="ml t-opacity t-balance">
          Yes, you can try our service for free. Simply visit our{" "}
          <Link to="/contact">contact form</Link> and submit a request to try
          our service for free. or you can take free{" "}
          <Link to="/test-series">test series</Link>.
        </p>
      </Panel>
    </PanelGroup>
  </div>
);

export default Faq;
