import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  //storedValue
  const [darkMode, setDarkMode] = useLocalStorage(false);
  //setValue
  const toggleMode = (event) => {
    event.preventDefault();
    if (darkMode === false) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    setDarkMode(!darkMode);
  };
  return [darkMode, toggleMode];
};

export default useDarkMode;
