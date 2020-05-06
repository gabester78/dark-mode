import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  //darkMode sets storedValue data
  const [darkMode, setDarkMode] = useLocalStorage(false);
  //toggleMode sets setValue data
  const toggleMode = (event) => {
    event.preventDefault();
    //checks if darkMode is false and adds className of dark-mode to body
    if (darkMode === false) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    //changes boolean value of darkMode to true if false and vice versa
    setDarkMode(!darkMode);
  };
  //allows functions to be transfered
  return [darkMode, toggleMode];
};

export default useDarkMode;
