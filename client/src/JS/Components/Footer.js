import '../../Styles/Footer.css';
import ScrollService from "../Utilities/ScrollService";

export default function Footer() {
  return (
    <div className="footer-container">
        <button
          className="top-scroll-btn"
          onClick={() => ScrollService.scrollHandler.scrollToHome()}
        >
           {" "}
          <i className="fa fa-arrow-up"></i>
        </button>
    </div>
  );
}
