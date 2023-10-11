import { SlBookOpen } from "react-icons/sl";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiOutlineFieldTime } from "react-icons/ai";
import "../styles/WhyChooseUs.css";
import AboutOurTestSeries from "../Utils/aboutOurTestSeries";
import { Panel, PanelGroup } from "rsuite";
const WhyChooseUs = () => {
  const detailsCTS = [
    {
      title: "Wide Coverage of Subjects and Topics",
      description:
        "We understand that every student's academic path is unique. That's why our test series spans a wide array of subjects and covers all essential topics. Whether you're preparing for competitive exams, board examinations, or university-level assessments, we have the right tests to help you succeed.",
    },
    {
      title: "Quality Content and Questions",
      description:
        "The quality of our test series is paramount. We work tirelessly to ensure that every question and piece of content is well-researched, accurate, and aligned with the latest curriculum and examination patterns. This dedication to quality ensures that you receive the best preparation material possible.",
    },
    {
      title: "Real Exam Simulation",
      description:
        "Our test series is designed to mimic the real examination experience. By practicing with our tests, you'll become familiar with the format, time constraints, and difficulty level of the actual exams. This realistic simulation will boost your confidence on the big day",
    },
    {
      title: "Expertly Crafted Explanations",
      description:
        "It's not just about taking tests; it's about learning from them. Our test series includes expertly crafted explanations for every question, helping you understand the concepts and strategies required to excel. Learning from your mistakes is a crucial part of your growth, and we facilitate that process.",
    },
  ];
  const detailsDPA = [
    {
      title: "Comprehensive Assessment",
      description:
        "Our performance analytics tool doesn't just give you a superficial overview of your performance. It delves deep into the results of each test you take. You'll gain insights into your scores, time management, question-wise performance, and much more. This comprehensive assessment allows you to pinpoint your strengths and weaknesses with precision.",
    },
    {
      title: "Identify Areas of Improvement",
      description:
        "Understanding where you excel and where you need improvement is crucial for effective learning. Our analytics tool highlights your weak areas, enabling you to focus your efforts on the topics that matter most. This targeted approach maximizes your study efficiency.",
    },
    {
      title: "Progress Over Time",
      description:
        "Track your progress over time with ease. Our tool provides a historical view of your performance, showing you how your scores have evolved throughout your test series journey. This feature allows you to measure your growth and celebrate your achievements.",
    },
    {
      title: "Customized Study Plans",
      description:
        "Based on your performance analytics, we generate personalized study plans. These plans are designed to address your specific needs and help you bridge the gaps in your knowledge. You'll receive tailored recommendations for further study and practice.",
    },
    {
      title: "Time Management Insights",
      description:
        "Efficient time management is crucial during exams. Our analytics tool offers insights into how you manage your time during tests. Discover whether you're spending too much time on certain questions or rushing through others. This knowledge empowers you to fine-tune your time management strategy.",
    },
    {
      title: "Comparative Analysis",
      description:
        "See how you stack up against your peers. Our performance analytics tool provides comparative analysis, allowing you to gauge your performance relative to others who have taken the same tests. This healthy competition can motivate you to strive for excellence.",
    },
    {
      title: "Motivation and Accountability",
      description:
        "Seeing your progress and understanding your areas for improvement can be highly motivating. It provides a sense of accountability and encourages you to stay committed to your study goals.",
    },
  ];
  const detailsFLS = [
    {
      title: "Study When and Where You Want",
      description:
        "Life can be busy, and traditional study schedules may not always fit into your daily routine. With our flexible learning schedule, you have the freedom to study whenever and wherever it's most convenient for you. Whether you're an early riser, a night owl, or prefer to squeeze in study sessions during breaks, our platform adapts to your schedule.",
    },
    {
      title: "No Rush, No Pressure",
      description:
        "We believe that true learning thrives in an environment free from undue pressure. Our flexible schedule means you can take the time you need to fully grasp concepts, practice, and review without feeling rushed. This approach promotes a deeper understanding of the subject matter.",
    },
    {
      title: "Set Your Own Milestones",
      description:
        "Your learning journey is unique, and so are your goals. With our flexible learning schedule, you can set your own milestones and study targets. Whether you want to complete a certain number of tests each week or focus intensively on specific topics, you're in control.",
    },
    {
      title: "Work-Life-Study Balance",
      description:
        "Many of our users are juggling multiple commitments, including work and family responsibilities. Our platform is designed to support a healthy work-life-study balance. You can seamlessly integrate your test series practice into your daily life without overwhelming your schedule.",
    },
    {
      title: "Personalized Study Plans",
      description:
        "We understand that planning your study schedule can be challenging. That's why we offer personalized study plans based on your goals and performance. These plans guide you on what to study next, making your learning journey more structured and efficient.",
    },
    {
      title: "Access Anytime, Anywhere",
      description:
        "Our online platform is accessible 24/7 from any device with an internet connection. Whether you're at home, on the go, or in a coffee shop, your study materials are just a click away.",
    },
    {
      title: "Consistency and Long-Term Learning",
      description:
        "Consistency is key to academic success. Our flexible learning schedule promotes regular, sustained learning, which is proven to be more effective than cramming. It's an approach that fosters long-term retention and understanding.",
    },
    {
      title: "Stress-Free Learning",
      description:
        "Stress can hinder learning. Our flexible schedule is designed to reduce stress by giving you the freedom to adapt your study routine to your needs, leading to a more relaxed and productive learning experience.",
    },
  ];
  return (
    <section
      className="why-choose-us max-w mt mx-auto"
      style={{ "--mwValue": 120 }}
    >
      <h2 className="tac mt" style={{ "--value": 8 }}>
        Why Choose Us
      </h2>
      <div className="line"></div>
      <PanelGroup accordion defaultActiveKey="1" className="padding-sm">
        <Panel
          header={
            <div className="feature-icon flex gap-md align-center">
              <SlBookOpen className="t-danger" />
              <h2 className="t-primary">Comprehensive Test Series</h2>
            </div>
          }
          eventKey={1}
          className="feature shadow-3d-light padding-sm radius-1 mt"
          style={{ "--value": 5 }}
        >
          <p className="t-capitalize t-bold margin-sm t-balance tac">
            we take pride in offering a comprehensive test series that serves as
            a cornerstone of your academic success. Our commitment to excellence
            and dedication to your learning journey are evident in the carefully
            curated test series we provide. Here&apos;s why &quot;Our
            Comprehensive Test Series&quot; stands out:
          </p>
          <AboutOurTestSeries details={detailsCTS} active={1} />
          <div className="line"></div>
          <p className="margin-sm t-capitalize t-bold t-balance tac">
            When you choose &quot;Our Comprehensive Test Series&quot;,
            you&apos;re not just accessing a set of tests; you&apos;re embarking
            on a journey of knowledge, improvement, and success. We&apos;re here
            to support you every step of the way, helping you achieve your
            academic and career goals. Join us today and experience the
            difference for yourself. Your success is our success!
          </p>
          <div className="line"></div>
        </Panel>

        <Panel
          eventKey={2}
          header={
            <div className="feature-icon flex gap-md align-center">
              <IoAnalyticsOutline className="t-warning" />
              <h2 className="t-primary">Detailed Performance Analytics</h2>
            </div>
          }
          className="feature shadow-3d-light padding-sm radius-1 mt"
          style={{ "--value": 5 }}
        >
          <div className="line"></div>
          <p className="t-capitalize t-bold margin-sm t-balance tac">
            we understand that the journey to academic excellence is paved with
            insights and data-driven progress. That&apos;s why we offer an
            exceptional feature - &quot;Detailed Performance Analytics&quot; -
            as an integral part of our test series. This tool empowers students
            to take control of their learning by providing in-depth insights
            into their performance. Here&apos;s why our performance analytics is
            a game-changer:
          </p>
          <AboutOurTestSeries details={detailsDPA} />
          <div className="line"></div>
          <p className="margin-sm t-capitalize t-bold t-balance tac">
            you&apos;re not just preparing for exams; you&apos;re embarking on a
            journey of self-improvement and growth. Our &quot;Detailed
            Performance Analytics&quot; feature is your trusted companion on
            this journey, helping you make informed decisions, set realistic
            goals, and ultimately, achieve the academic success you deserve.
            Start harnessing the power of data to supercharge your learning
            today!
          </p>
          <div className="line"></div>
        </Panel>

        <Panel
          header={
            <div className="feature-icon flex gap-md align-center">
              <AiOutlineFieldTime  className="t-info" />
              <h2 className="t-primary">Flexible Learning Schedule</h2>
            </div>
          }
          eventKey={3}
          className="feature shadow-3d-light padding-sm radius-1 mt"
          style={{ "--value": 5 }}
        >
          <div className="line"></div>
          <p className="t-capitalize t-bold margin-sm t-balance tac">
            we understand that the path to success in academics is not
            one-size-fits-all. That&apos;s why we&apos why we&apos;re proud to
            offer a &quot;Flexible Learning Schedule&quot; designed to cater to
            your unique needs and circumstances. Our commitment to your
            educational journey goes beyond just providing test series -
            it&apos;s about empowering you to learn at your own pace.
            Here&apos;s why our flexible learning schedule sets us apart:
          </p>

          <AboutOurTestSeries details={detailsFLS} />
          <div className="line"></div>
          <p className="margin-sm t-capitalize t-bold  t-balance tac">
            we&apos;re not just here to help you prepare for exams; we&apos;re
            here to support your educational journey in a way that suits your
            lifestyle and goals. With our &quot;Flexible Learning
            Schedule,&quot; you can achieve academic success on your terms.
            Start learning at your own pace and experience the difference today!
          </p>
          <div className="line"></div>
        </Panel>
      </PanelGroup>
    </section>
  );
};

export default WhyChooseUs;
