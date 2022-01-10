import React from "react";
import "./Pagination.css";
function Pagination(props) {
  // const {pagination, onPageChange} = props
  // const {page, limit, totalRows} = pagination
  // const totalPages = Math.ceil(totalRows/limit)
  // function handlePageChange() {
  //   // onPageChange(newPage)
  // }
  return (
    <div>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center mt-40"
      >
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span
                aria-hidden="true"
                // disabled={page <= 1}
                // onClick={() => {
                //   handlePageChange(page - 1);
                // }}
              >
                &laquo;
              </span>
            </a>
          </li>
          <li class="page-item" onClick={() => props.onPageChange(1)}>
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item" onClick={() => props.onPageChange(2)}>
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item" onClick={() => props.onPageChange(3)}>
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item" onClick={() => props.onPageChange(4)}>
            <a class="page-link" href="#">
              4
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              5
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              6
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              7
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              8
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              9
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              10
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span
                aria-hidden="true"
                // disabled={page >= totalPages}
                // onClick={() => {
                //   handlePageChange(page + 1);
                // }}
              >
                &raquo;
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
