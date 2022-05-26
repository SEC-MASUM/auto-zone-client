import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const DeleteModal = ({ id, name, handleDelete, children }) => {
  return (
    <>
      <label
        htmlFor="delete-modal"
        className="btn modal-button btn btn-sm btn-primary"
      >
        {children}
      </label>

      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal  modal-bottom sm:modal-middle">
        <div className="card bg-white relative">
          <div className="card-body">
            <label
              htmlFor="delete-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="p-6 text-center">
              <RiErrorWarningLine className="mx-auto mb-4 w-14 h-14 text-red-600 "></RiErrorWarningLine>
              <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                Are you sure you want to delete?
              </h3>
              <label
                onClick={() => handleDelete(id)}
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </label>

              <label
                htmlFor="delete-modal"
                // onClick={() => setShowModal(false)}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                No, cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
