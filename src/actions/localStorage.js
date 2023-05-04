// import { alertMassage } from "./alerts";

export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

export const removeLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};

/** check Liked item */
export const checkLike = (id) => {
  const likes = getLocalStorage("likes");

  if (likes) {
    if (likes.includes(id)) {
      return false;
    } else {
      likes.push(id);
      setLocalStorage("likes", likes);
    }
  } else {
    setLocalStorage("likes", [id]);
  }
  return true;
};
