import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import catergoryApi from "../../../api/catergoryApi";

const ListCatergory = () => {
  const [listCatergory, setListCatergory] = useState([]);

  useEffect(() => {
    catergoryApi.getAll().then((response) => {
      setListCatergory(response.data);
    });
  }, []);

  return (
    <div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Catergories</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <NavLink to="/admin/catergory/add">Add catergorie</NavLink>
              </button>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <span data-feather="calendar" />
              This week
            </button>
          </div>
        </div>

        <div className="table-responsive">{/* <ListProduct /> */}</div>
      </main>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listCatergory.length !== 0 &&
            listCatergory.map((catergory, index) => (
              <>
                <tr>
                  <td>{catergory.id}</td>

                  <td>{catergory.name}</td>

                  <td>
                    <div class="d-grid gap-2 d-md-block">
                      <button type="button" class="btn btn-primary">
                        <Link to={`/admin/catergory/edit/${catergory.id}`}>
                          Edit
                        </Link>
                      </button>

                      <button
                        // onClick={() => handleDelete(catergory.id)}
                        style={{ marginRight: "5px" }}
                        type="button"
                        class="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
      {/* <Route></Route> */}
      {/* <AddProductForm onAdd={}/> */}
    </div>
  );
};
export default ListCatergory;
