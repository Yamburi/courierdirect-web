import { generateUniqueUserId } from "./helpers";

let cachedUuid: string;

export const generateUserId = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    if (!cachedUuid) {
      const storedUuid = localStorage.getItem("courier-direct-chat-user");

      if (storedUuid) {
        cachedUuid = storedUuid;
      } else {
        cachedUuid = generateUniqueUserId();
        localStorage.setItem("courier-direct-chat-user", cachedUuid);
      }
    }
  }

  return cachedUuid;
};

export { cachedUuid };

export const getUserIdFromLocalStorage = () => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("courier-direct-chat-user")
      : null;
  return token;
};
