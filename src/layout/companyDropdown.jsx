import React, { useState } from "react";
import { serviceDropdown } from "./routing";
import { Link } from "react-router-dom";
import "./CompanyDropdown.css";

function CompanyDropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link to="/" onClick={() => setDropdown(false)}>
                <span>{item.icons}</span> {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CompanyDropdown;
