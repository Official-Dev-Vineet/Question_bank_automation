export const supportLinks = [
  {
    title: "FAQ",
    url: "/faq",
  },
  {
    title: "Help Center",
    url: "/help",
  },
  {
    title: "Privacy Policy",
    url: "/privacy",
  },
  {
    title: "Terms & Conditions",
    url: "/terms",
  },
];
export const aboutLinks = [
  {
    title: "Our PortFolio",
    url: "https://github.com/Official-Dev-Vineet",
  },
  {
    title: "Careers",
    url: "/Careers",
  },
  {
    title: "Payment",
    url: "/student/payment",
  },
];

export const testCategoriesLinks = [
  {
    title: "New",
    url: "/test-series/new",
  },
  {
    title: "SSC",
    url: "/test-series/sscTest",
  },
  {
    title: "Railway",
    url: "/test-series/railwayTest",
  },
  {
    title: "Banking",
    url: "/test-series/bankTest",
  },
  {
    title: "Teacher",
    url: "/test-series/teacherTest",
  },
  {
    title: "Defense",
    url: "/test-series/defenseTest",
  },
  {
    title: "Others",
    url: "/test-series",
  },
];

export const registerInput = [
  {
    id: "fullName",
    name: "fullName",
    type: "text",
    placeholder: "Full Name",
    errorMessage:
      "Full Name should be 3-16 characters and shouldn't include any special character!",
    label: "Full Name",
    pattern: "^[A-Za-z\\s]{3,30}$",
    required: true,
  },
  {
    id: "username",
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: "contactNumber",
    name: "contactNumber",
    type: "tel",
    placeholder: "Contact Number",
    pattern: `^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[789]\\d{9}$`,
    errorMessage: "It should be a valid phone number with our country code !",
    label: "Contact Number",
    required: true,
  },
  {
    id: "email",
    name: "emailId",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: "birthday",
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    label: "Birthday",
  },
  {
    id: "address",
    name: "address",
    type: "text",
    placeholder: "Address",
    label: "Address",
    pattern: "^[A-Za-z0-9\\s]{3,50}$",
    required: true,
  },
  {
    id: "Designation",
    name: "role",
    type: "text",
    placeholder: "Dream Job",
    label: "Dream Job",
    pattern: "^[A-Za-z\\s]{3,16}$",
    required: true,
    errorMessage:
      "It should be a valid Designation without any special character !",
  },
];

export const loginInput = [
  {
    id: "email",
    name: "emailId",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
];
