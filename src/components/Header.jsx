import React from "react";

function Header({ grouping, sortOrder, onGroupingChange, onSortOrderChange }) {
  return (
    <div className="header">
      <div className="grouping-controls">
        <label>Group by:</label>
        <select
          value={grouping}
          onChange={(e) => onGroupingChange(e.target.value)}
        >
          <option value="status">Display</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      {/* <div className="sorting-controls">
                <label>Sort by:</label>
                <select value={sortOrder} onChange={(e) => onSortOrderChange(e.target.value)}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div> */}
    </div>
  );
}

export default Header;
