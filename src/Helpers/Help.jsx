import { Link } from "react-router-dom";

const HelpPage = () => {
  return (
    <div className="help-page max-w w-full mx-auto" style={{ "--mwValue": 120 }}>
      <h1 className="tac mb">Help & FAQs</h1>
      <p className="t-opacity t-balance tac">
        Welcome to the Help and FAQs section of our Test Series Website. We are
        here to assist you in making the most of our platform. Below,
        you&apos;ll find answers to common questions and guidance on using our
        website effectively.
      </p>

      {/* Frequently Asked Questions */}
      <section className="faq-section margin-xl">
        <h2 className="mb">Frequently Asked Questions :</h2>
        <div className="faq-item ml mb">
          <h3>1. How do I create an account?</h3>
          <p className="ml  mt t-balance t-opacity">
            To create an account, click on the &quot;Sign Up&quot; button on the
            top right corner of the homepage. Fill in the required information
            and follow the prompts to set up your account.
          </p>
        </div>

        <div className="faq-item ml mb">
          <h3>2. How do I purchase a subscription plan?</h3>
          <p className="ml mt t-balance t-opacity">
            After logging in, go to the &quot;Subscription Plans&quot; section
            in your profile. Select the plan that suits your needs and follow
            the steps to make a payment securely.
          </p>
        </div>

        <div className="faq-item ml mb">
          <h3>3. Can I reset my password?</h3>
          <p className="ml mt t-balance t-opacity">
            Yes, if you forget your password, click on the &quot;Forgot
            Password&quot; link on the login page. Follow the instructions sent
            to your email to reset your password.
          </p>
        </div>

        <Link to={"/faq"}>More FAQS</Link>
      </section>

      {/* Contact Support */}
      <section className="contact-support mb">
        <h2>Contact Support</h2>
        <p className="ml t-balance t-opacity">
          If you have a question that isn&apos;t covered in our FAQs, please
          don&apos;t hesitate to reach out to our support team. We are here to
          assist you.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:support@questionshala.com">
            {" "}
            support@questionshala.com
          </a>{" "}
        </p>
        <p>
          Phone:{" "}
          <b>
            <a href="tel:+919876543210">+91 9876543210</a>
          </b>
        </p>
      </section>

      {/* Additional Help Resources */}
      <section className="additional-help mb">
        <h2>Additional Help Resources</h2>
        <p className="ml t-balance t-opacity">
          For more in-depth guidance and tutorials on using our platform, visit
          our <Link href="/Contact">Contact Page</Link>.
        </p>
      </section>
    </div>
  );
};

export default HelpPage;
