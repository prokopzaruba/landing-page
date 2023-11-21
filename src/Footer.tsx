import Contact from "./Contanct";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer>
      <img
        className="background-animation top-animation"
        src="./images\bg-footer-top-desktop.svg"
        alt="background-animation"
      />
      <div className="footer-box">
        <Contact />
        <Newsletter />
      </div>
    </footer>
  );
};

export default Footer;
