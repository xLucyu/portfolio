import { useState, useEffect } from "react";
import "./style.css";
import { updateTime } from "./getTime";

function mainSite() {

  const [time, setTime] = useState<string>(updateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(updateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className = "container">
      <div className = "titleBox">
        <a href = "/" className = "titleText">
          <div> Lucy's Portfolio </div>
        </a>
        <div className = "time"> {time} </div>
      </div>
    </div>
  );
}

export default mainSite;
