function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <a className="logo" href="#home">
          Krish<span className="gradient-text"> Paliwal</span>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;