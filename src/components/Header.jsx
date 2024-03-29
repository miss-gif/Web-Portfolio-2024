import "./Header.scss";

const Header = () => {
  const logo = "<miss-gif>";

  const handleNavOpen = () => console.log();

  return (
    <header className="header">
      <h1>{logo}</h1>
      <button className="nav-open-btn" onClick={handleNavOpen}>
        버튼
      </button>
    </header>
  );
};

export default Header;
