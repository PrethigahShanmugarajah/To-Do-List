import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <textarea
        autoFocus
        id="addItem"
        name="addItem"
        placeholder="Add item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        rows={3}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;