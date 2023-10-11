import axios from "axios";

// user related request
const options = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_USER_KEY}`,
  },
};
export const fetchRequest = async (url, method, body) => {
  const result = await axios({
    method: method,
    url: url,

    data: body,
    ...options,
  }).then((response) => response.data);
  return result;
};

//admin related request
const optionsAdmin = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_SECRETE_KEY}`,
  },
};
export const fetchAdminRequest = async (url, method, body) => {
  const result = await axios({
    method: method,
    url: url,
    data: body,
    ...optionsAdmin,
  }).then((response) => response.data);
  return result;
};

// set Cookie
export const setCookie = (cName, cValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
};

// get cookie
export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return undefined;
};

// delete cookie
export const deleteCookie = (name) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
