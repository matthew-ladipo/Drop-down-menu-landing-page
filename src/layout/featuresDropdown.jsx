import React, { useState } from "react";
import { navItems } from "./routing";
import { Link } from "react-router-dom";
import "./CompanyDropdown.css";


function CompanyDropdown() {
  const [featureDrop, setfeatureDrop] = useState(false);

  return (
    <>
      <ul
        className={
          featureDrop ? "services-submenu clicked" : "services-submenu"
        }
        onClick={() => setfeatureDrop(!featureDrop)}
      >
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <Link to="/" onClick={() => setfeatureDrop(false)}>
              {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CompanyDropdown;
