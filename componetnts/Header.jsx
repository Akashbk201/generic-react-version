function Header() {
  return (
    <>
      <nav className="nav-sec">
        <div class="container">
          <div className="wrap">
            <div className="logo">
              <a href="#">Generic</a>
            </div>
            <div className="menu-items">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#"> Offerings</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="btn-box">
              <a className="cta-btn" href="#">
                Call to Action
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
