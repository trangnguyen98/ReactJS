import React from "react";
import { useForm } from "react-hook-form";
function AddProductForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <div>
      <form class="row g-3">
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Price
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>

        <div class="col-12">
          <label class="visually-hidden" for="inlineFormSelectPref">
            Preference
          </label>
          <select class="form-select" id="inlineFormSelectPref">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
