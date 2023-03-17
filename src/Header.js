function Header(){
    return(
        <header className="header py-3">
            <div className="container">
              <nav className="navbar">
                <img src={require('./images/logo.png')}></img>
                {/* <a href="/" className="navbar-brand">UFluence</a> */}
                <ul className='active'>
                  <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                  <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                  <li className="nav-item"><a href="#pricing" className="nav-link">Pricing</a></li>
                  <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>
        </header>
    );
}

export default Header;