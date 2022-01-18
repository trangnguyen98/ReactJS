// import axios from "axios";
import React from "react";
// import { useForm } from "react-hook-form";
import { useState } from "react";
// import axiosClient from "../../../api/axiosClient";
import catergoryApi from "../../../api/catergoryApi";
import { useHistory } from "react-router-dom";
function AddCatergoryForm() {
  // const { register, handleSubmit, watch, errors } = useForm();

  const [nameCatergory, setNameCatergory] = useState("");
  // const [categoryCatergory, setCategoryCatergory] = useState("");
  // const [priceCatergory, setPriceCatergory] = useState("");
  const history = useHistory();

  // const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    // console.log(nameCatergory);

    try {
      // console.log(+priceCatergory);
      await catergoryApi.addcatergory({
        name: nameCatergory,
        // price: +priceCatergory,
        // catergory: categoryCatergory,
      });
      history.push("/admin/catergory");
      // console.log(response);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div class="row g-3">
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">
          Name
        </label>
        <input
          type="name"
          class="form-control"
          id="inputName4"
          placeholder="Name"
          name="name"
          value={nameCatergory}
          onChange={(e) => setNameCatergory(e.target.value)}
        />
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddCatergoryForm;
