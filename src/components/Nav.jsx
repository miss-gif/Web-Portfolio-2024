import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <button className="close-nav">close</button>
      <ul className="nav-content">
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#resume">resume</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
