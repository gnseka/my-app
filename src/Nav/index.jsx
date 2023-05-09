export default function NavBar(params) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: "rgb(34, 37, 57)", marginBottom : "20px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Book my show
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Streams
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Sport
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Activities
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Buzz
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  play
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
}
