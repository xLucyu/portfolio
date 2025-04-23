import { useState, useEffect } from "react";
import "./style.css";
import { updateTime } from "./getTime";
import DropdownMenu from "./dropdown.tsx";

export function mainSite() {

  const [time, setTime] = useState<string>(updateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(updateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className = "textBox">
        <a href = "/" className = "titleText">
          <div> Lucy's Portfolio </div>
        </a>
        <div className = "pronouns"> she/her </div>
        <div className = "time"> {time} </div>
      </div>
      <div> {DropdownMenu()} </div>
      <img src="/src/picture.png" className = "profilePicture"/>
        
    </>
  );
}

export default mainSite;
