import config from "@config/config.json";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "../../styles/switchThemeBtn.module.css";
const ThemeSwitcher = () => {
  const { theme_switcher } = config.settings;
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  // Switch cool button
  const [isChecked, setIsChecked] = useState(true); // Set initial state to true
  const toggleChecked = () => setIsChecked(!isChecked); // Function to toggle state
  return (
    <>
    
    {/* <label className={styles.switch}>
      <input  type="checkbox" checked={isChecked} // Set checked attribute to state
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
      onChange={toggleChecked} // Toggle state when checkbox is clicked
      />
      <div className={styles.button}>
        <div className={styles.light}></div>
        <div className={styles.dots}></div>
        <div className={styles.characters}></div>
        <div className={styles.shine}></div>
        <div className={styles.shadow}></div>
      </div>
    </label>  */}


<label>
    <input type="checkbox" className={styles.slider}
    
    onClick={() =>
      setTheme(
        theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
      )}
      onChange={toggleChecked} // Toggle state when checkbox is clicked
    
    />
    <div className={styles.switch}>
        <div className={styles.suns}></div>
        <div className={styles.moons}>
          <div className={styles.star + " " + styles["star-1"]}></div>
          <div className={styles.star + " " + styles["star-2"]}></div>
          <div className={styles.star + " " + styles["star-3"]}></div>
          <div className={styles.star + " " + styles["star-4"]}></div>
          <div className={styles.star + " " + styles["star-5"]}></div>
          <div className={styles["first-moon"]}></div>
        </div>
        <div className={styles.sand}></div>
        <div className={styles.bb8}>
          <div className={styles.antennas}>
            <div className={styles.antenna + " " + styles.short}></div>
            <div className={styles.antenna + " " + styles.long}></div>
          </div>
          <div className={styles.head}>
            <div className={styles.stripe + " " + styles.one}></div>
            <div className={styles.stripe + " " + styles.two}></div>
            <div className={styles.eyes}>
              <div className={styles.eye + " " + styles.one}></div>
              <div className={styles.eye + " " + styles.two}></div>
            </div>
            <div className={styles.stripe + " " + styles.detail}>
              <div className={styles.detail + " " + styles.zero}></div>
              <div className={styles.detail + " " + styles.zero}></div>
              <div className={styles.detail + " " + styles.one}></div>
              <div className={styles.detail + " " + styles.two}></div>
              <div className={styles.detail + " " + styles.three}></div>
              <div className={styles.detail + " " + styles.four}></div>
              <div className={styles.detail + " " + styles.five}></div>
              <div className={styles.detail + " " + styles.five}></div>
            </div>
            <div className={styles.stripe + " " + styles.three}></div>
          </div>
          <div className={styles.ball}>
            <div className={styles.lines + " " + styles.one}></div>
            <div className={styles.lines + " " + styles.two}></div>
            <div className={styles.ring + " " + styles.one}></div>
            <div className={styles.ring + " " + styles.two}></div>
            <div className={styles.ring + " " + styles.three}></div>
          </div>
          <div className={styles.shadow}></div>
        </div>
      </div>
</label>

      {theme_switcher && (
        <button
          aria-label="Toggle Theme"
          type="button"
          className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
          onClick={() =>
            setTheme(
              theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-gray-900 dark:text-gray-100"
          >
            {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            ) : (
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            )}
          </svg>
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;
