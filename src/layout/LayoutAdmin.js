// import { Link } from "react-router-dom";
// import ListProduct from "../features/Admin/Products/ListProduct";
import { NavLink } from "react-router-dom";
import RoutesAdmin from "../Routes/RoutesAdmin";
const LayoutAdmin = () => {
  return (
    <div>
      <div>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
            Company name
          </a>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="#">
                Sign out
              </a>
            </div>
          </div>
        </header>
        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      <span data-feather="home" />
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file" />
                      Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin/product" className="nav-link">
                      <span data-feather="shopping-cart" />
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="users" />
                      Customers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="bar-chart-2" />
                      Reports
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="layers" />
                      Integrations
                    </a>
                  </li>
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Saved reports</span>
                  <a
                    className="link-secondary"
                    href="#"
                    aria-label="Add a new report"
                  >
                    <span data-feather="plus-circle" />
                  </a>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text" />
                      Current month
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text" />
                      Last quarter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text" />
                      Social engagement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text" />
                      Year-end sale
                    </a>
                  </li> */}
                </ul>
              </div>
            </nav>
            <div className="col-9">
              <RoutesAdmin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
