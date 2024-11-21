import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import "./header.scss";

function Header () {
    return (
      <header
        className="header">
          <Logo/>
          <NavBar/>
      </header>
    );
  };
  
  export default Header;