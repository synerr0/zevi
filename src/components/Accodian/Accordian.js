import { useState } from "react";
import "../styles.scss";

export default function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className={`icon ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}
