import "./themeslider.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

function ThemeSlider({ onToggle }) {
  return (
    <>
      <input
        type="checkbox"
        className="checkbox"
        id="chk"
        onChange={onToggle}
      />
      <label className="label" htmlFor="chk">
        <BsFillMoonStarsFill />
        <FaSun />
        <div className="ball"></div>
      </label>
    </>
  );
}

export default ThemeSlider;
