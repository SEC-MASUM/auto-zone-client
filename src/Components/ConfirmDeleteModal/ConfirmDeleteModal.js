import axios from "axios";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { toast } from "react-toastify";

const ConfirmDeleteModal = ({ product, setProduct, refetch }) => {
  const { name, _id } = product;
  const handleDelete = (id) => {
    console.log(id);
    (async () => {
      // const url = `http://localhost:5000/order/${id}`;
      const url = `https://auto-zone-01.herokuapp.com/order/${id}`;
      console.log(url);
      const result = await axios.delete(url, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(result);
      if (result.data.deletedCount) {
        setProduct(null);
        refetch();
        toast.success(`Deleted Successfully`);
        refetch();
      } else {
        toast.success(`Failed to delete`);
      }
    })();
  };
  return (
    <div>
      <input type="checkbox" id="confirm-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box text-center">
          <label
            for="confirm-delete-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <RiErrorWarningLine className="mx-auto mb-4 w-14 h-14 text-red-600 "></RiErrorWarningLine>
          <h3 class="mb-5 text-lg font-bold text-gray-500">
            Are you sure you want to delete{" "}
            <span className="text-red-600">
              "{name}"
            </span>{" "}
            ?
          </h3>
          <label
            onClick={() => handleDelete(_id)}
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Yes, I'm sure
          </label>

          <label
            htmlFor="confirm-delete-modal"
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
          >
            No, cancel
          </label>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
