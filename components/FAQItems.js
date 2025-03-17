"use client";
import { useState } from "react";

const FAQItems = ({ qs }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      {/* 1, question (clickable) */}
      <button
        className="py-5 font-semibold border-b w-full text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{qs.question}</p>

        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </button>
      {/* 2, answer */}
      {isOpen ? <div className="mt-3 mb-6">{qs.answer}</div> : <></>}
    </li>
  );
};

export default FAQItems;
