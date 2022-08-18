const convertExpiresToString = (exDays) => {
  if (!exDays) return "";

  const DAYS = exDays * 24 * 60 * 60 * 1000;
  const date = new Date();
  date.setTime(date.getTime() + DAYS);

  let expires = "expires=" + date.toUTCString();

  return expires;
};

const useCookie = () => {
  const get = (name) => {
    if (typeof window === "undefined") return;

    name = `${name}=`;

    const decodedCookie = decodeURIComponent(window.document.cookie);
    const splitingCookie = decodedCookie.split(";");

    let currentCookie = "";
    splitingCookie.forEach((cookie) => {
      cookie = cookie.replaceAll(" ", "");

      if (cookie.indexOf(name) === 0) {
        return (currentCookie = cookie.substring(name.length, cookie.length));
      }
    });

    return currentCookie;
  };

  const set = ({ name, value, exDays = "", path = "/" }) => {
    if (typeof window === "undefined") return;

    const expires = convertExpiresToString(exDays);

    // setCookie
    document.cookie = `${name}=${value}; ${expires}; path=${path}`;
  };

  const del = (name) => {
    if (typeof window === "undefined") return;

    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  };

  const getAll = () => {
    if (typeof window === "undefined") return;

    const cookiesArr = document.cookie.split(";");
    const result = {};

    cookiesArr.forEach((cookie) => {
      const splitSymp = cookie.split("=");

      const cookieName = splitSymp[0].trim();
      const cookieValue = splitSymp.slice(1).join("=");

      result[cookieName] = cookieValue;
    });

    return result;
  };

  const cookie = { get, set, del, getAll };

  return cookie;
};

export default useCookie;
