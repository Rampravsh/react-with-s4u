import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEditPopup } from "../../store/features/popup/popup.slice";

const EditPopup = () => {
  const dispatch = useDispatch();

  const editPopup = useSelector((state) => state.popup.editPopup);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profileUrl: "",
    department: "",
  });

  const onSave = () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div
      onClick={() => dispatch(closeEditPopup())}
      className={`fixed inset-0 ${editPopup ? "" : "hidden"}  flex items-center justify-center z-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-base-200 p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-xl font-bold mb-4">Edit Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="profileUrl"
            placeholder="Profile URL"
            value={formData.profileUrl}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="details"
            placeholder="Details"
            className="w-full border p-2 rounded"
          ></textarea>
          <div className="flex justify-end ">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
