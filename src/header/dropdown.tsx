import { useState, useRef, useEffect } from "react";
import "./dropdown.css";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdownContainer" ref={menuRef}>
      <button className="dropdownButton" onClick={() => setIsOpen(!isOpen)}>
        <span className="staticMenuIcon">☰</span> Options
      </button>
      {isOpen && (
        <div className="dropdownContent">
          <a href="/about-me" className="dropdownItem">About Me</a>
          <a href="/projects" className="dropdownItem">Projects</a>
          <a href="/contact" className="dropdownItem">Contact</a>
        </div>
      )}
    </div>
  );
}

