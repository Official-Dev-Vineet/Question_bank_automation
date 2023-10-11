function AboutUs() {
  return (
    <div
      className="about-us max-w mx-auto flex flex-col gap-md shadow-3d-light mt radius-1 padding-md"
      style={{ "--mwValue": 100 }}
    >
      <h1 className="tac t-primary mb">About Us</h1>
      <p className="t-opacity">
        Welcome to our test series website! We are dedicated to helping students
        prepare for their exams with the best practice materials and resources.
      </p>
      <p className="t-opacity">
        Our team of experts has carefully curated a wide range of test series
        covering various subjects and competitive exams to ensure that you get
        the practice you need to succeed.
      </p>
      <p className="t-opacity">
        We are committed to providing high-quality content, real-time progress
        tracking, and a user-friendly experience to help you achieve your
        academic and career goals.
      </p>
      <p className="t-opacity">
        Thank you for choosing our platform, and we wish you the best of luck in
        your exam preparation journey!
      </p>
    </div>
  );
}

export default AboutUs;
