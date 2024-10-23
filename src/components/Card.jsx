import React from "react";
import { data } from "./data"; // Import your data here

function Card({ ticket }) {
  // Find the user corresponding to the ticket's userId
  const user = data.users.find((user) => user.id === ticket.userId);

  return (
    <div className="card">
      <p>{ticket.id}</p>
      <div className="todo-item">
        <img
          src={ticket.statusIcon}
          alt={`${ticket.status} icon`}
          className="status-icon"
        />
        <h4>{ticket.title}</h4>
      </div>

      {/* Display user info */}
      {user && (
        <div className="user-info">
          <h5>Assigned to: {user.name}</h5>
          <p>Id: {user.id}</p>
          <p>Status: {user.available ? "Available" : "Not Available"}</p>
        </div>
      )}

      <div className="todo-item1">
        <img
          src={ticket.statusIcon1}
          alt={`${ticket.status} icon`}
          className="status-icon"
        />
        <p>{ticket.tag}</p>
      </div>
    </div>
  );
}

export default Card;

// import React from "react";

// function Card({ ticket }) {
//   return (
//     <div className="card">

//         <p>{ticket.id}</p>
//       <div class="todo-item">
//         <img
//           src={ticket.statusIcon}
//           alt={`${ticket.status} icon`}
//           className="status-icon"
//         />

//         <h4>{ticket.title}</h4>

//       </div>

//        {/* <p>{ticket.description}</p>
//       <span className="priority">Priority: {ticket.priority}</span> */}

//       <div class="todo-item1">
//       <img
//           src={ticket.statusIcon1}
//           alt={`${ticket.status} icon`}
//           className="status-icon"
//         />
//       <p>{ticket.tag}</p>
//       </div>
//     </div>

//   );
// }

// export default Card;
