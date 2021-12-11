// import all files here
import {Link} from "react-router-dom";
import brainFlixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img
            className="header__logo"
            src={brainFlixLogo}
            alt="BrainFlix Logo"
          />
        </Link>
        <div className="header__form-container">
          <form className="header__form" action="">
            <input
              className="header__form-input"
              type="text"
              placeholder="Search"
            />
          </form>
          <div className="header__image-container-top"></div>
        </div>
        <button className="header__button">UPLOAD</button>
        <div className="header__image-container-bottom"></div>
      </div>
    </header>
  );
}

export default Header;
