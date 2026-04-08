import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../../store/features/popup/popup.slice";

const DeletePopup = () => {
    const deletePopu =useSelector((state) => state.popup.deletePopup);
    const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(closeDeletePopup())}
      className={`fixed inset-0 ${deletePopu ? "" : "hidden"}  flex items-center justify-center z-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-base-200 p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-xl font-bold mb-4">Delete Employee</h2>
        <p>Are you sure you want to delete this employee?</p>
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-red-600 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
