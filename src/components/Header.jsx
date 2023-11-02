import React, { useState } from "react";
import DropDown from "./Dropdown";
import ComponentD from "../layout/companyDropdown";
import FeatureDd from "../layout/featuresDropdown";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function openBacdrop() {}

  const [dropdown, setDropdown] = useState(false);
  const [featureDrop, setfeatureDrop] = useState(false);

  const [Mobile, setMobile] = useState(false);
  return (
    <main>
      <header>
        <div className="nav-area" data-aos="fade-up">
          <div className="logo">Snap</div>
          <nav>
            <ul
              className={Mobile ? "menus-mobile" : "menus"}
              onClick={() => setMobile(false)}
            >
              <section></section>
              <li
                className="menu-items"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                Feature <i className="fas fa-chevron-down" />
                {dropdown && <ComponentD />}
              </li>
              <li
                className="menu-items"
                onMouseEnter={() => setfeatureDrop(true)}
                onMouseLeave={() => setfeatureDrop(false)}
              >
                Company <i className="fas fa-chevron-down" />{" "}
                {featureDrop && <FeatureDd />}
              </li>
              <li className="menu-items" style={{ marginLeft: "3px" }}>
                <a href="#">Career</a>
              </li>
              <li className="menu-items" style={{ marginLeft: "3px" }}>
                <a href="#">About</a>
              </li>
              <div className="btns">
                <button className="btn2">Login</button>
                <button className="btn1">Register</button>
                <div className="dash">-----</div>
              </div>
            </ul>
          </nav>

          <div className="menuicon" onClick={() => setMobile(!Mobile)}>
            {Mobile ? <ImCross /> : <FaBars onClick={openBacdrop} />}
          </div>
        </div>
      </header>
      <DropDown />
    </main>
  );
};

export default Header;
