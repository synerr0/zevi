import React, { useState, ReactNode } from "react";
import "../styles.scss";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export default function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className={`icon ${isOpen ? "open" : ""}`}><i className="fa-solid fa-chevron-down"></i></span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}
