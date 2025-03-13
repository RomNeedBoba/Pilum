import React from "react";
import "../styles/Header.css";

interface HeaderProps {
  scrollToSection: (section: string) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, activeSection }) => {
  const sections: string[] = ["home", "Work", "Actvities", "Resume", "Contact"];

  const handleClick = (section: string) => {
    scrollToSection(section);
  };

  return (
    <header className="sticky-header">
      <nav>
        <ul>
          {sections.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeSection === item ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item);
                }}
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
