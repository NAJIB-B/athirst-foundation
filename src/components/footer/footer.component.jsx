import "./footer.style.css";
import { HashLink as Link } from "react-router-hash-link";
const Footer = () => {
  return (
    <div className="footerDiv">
      <h2>
        <Link smooth to="/#home" className="footerLogo">
          ATHIRST FOUNDATION.ORG
        </Link>
      </h2>
      <h5>© 2022 Athirst Foundation.org</h5>
    </div>
  );
};

export default Footer;
