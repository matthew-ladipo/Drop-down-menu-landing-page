import img1 from "../image/image-hero-desktop.png";
import img2 from "../image/image-hero-mobile.png";
import style from "./Dropdown.module.css";
import svg1 from "../image/client-audiophile.svg";
import svg2 from "../image/client-databiz.svg";
import svg3 from "../image/client-maker.svg";
import svg4 from "../image/client-meet.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DropDown = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className={style.media}>
        <div className={style.image}>
          <img className={style.img2} src={img2} alt="image" />
        </div>
        <div className={style.main}>
          <div className={style.intro} >
            <div className={style.container}>
              <h1>
                Make
                <br />
                <span>remote work</span>
              </h1>
              <h3 className={style.text}>
                A software developer with proficient skill in web development
                and a expert of front-end development. I look forward to
                sertisfy all your available request .
              </h3>
              <button className={style.btn}>
                <i className="fas fa-chevron-down"></i>Learn more
              </button>
              <div className={style.svgs}>
                <img src={svg2} alt="s2" className={style.post} />
                <img src={svg1} alt="s1" className={style.post} />

                <img src={svg3} alt="s3" className={style.post} />
                <img src={svg4} alt="s3" className={style.post} />
              </div>
            </div>
            <div className={style.image1}>
              <img className={style.img1} src={img1} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
