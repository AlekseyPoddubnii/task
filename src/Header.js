import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="container-fluid limit">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="header__h1">
              Container Width: 1170px;
            </h1>
            <h2 className="header__h2">
              gutter: 30px
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
