import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
        style={{
          accentColor: item.checked ? "#00A65A" : undefined,
        }}
      />

      <label
        style={
          item.checked
            ? {
                textDecoration: "line-through",
                textDecorationColor: "#00A65A",
                color: "#00A65A",
              }
            : null
        }
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>

      <FaTrashAlt
        role="button"
        onClick={() => handleDelete(item.id)}
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;