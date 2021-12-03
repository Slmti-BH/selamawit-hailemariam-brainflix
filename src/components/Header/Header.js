import brainFlixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
// import Image from "../Image/Image";
import muhanMuruge from "../../assets/images/images/Mohan-muruge.jpg";
import ProfileImageContainer from  "../ProfileImageContainer/ProfileImageContainer" 
import "./Header.scss"

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={brainFlixLogo} alt="BrainFlix Logo" />
      <form action="">
        <input type="text" placeholder="Search" />
      </form>
      <div className="header__image-container--top"></div>
      {/* <ProfileImageContainer /> */}
      {/* <Image
        src={muhanMuruge}
        alt={`Head shot of Muhan
       Muruge`}
      /> */}
      <button>Upload</button>
      <div className="header__image-container--bottom"></div>
      {/* <ProfileImageContainer /> */}
      {/* <Image
        src={muhanMuruge}
        alt={`Head shot of Muhan
       Muruge`}
      /> */}
    </header>
  );
}

export default Header;
