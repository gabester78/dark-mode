import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    //call from local storage by key value
    const item = window.localStorage.getItem(key);
    //return data as a string if it exists
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    //save value to state
    setStoredValue(value);
    //save value to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  //allows functions to be transfered
  return [storedValue, setValue];
};

export default useLocalStorage;
