import React from "react";

function CustomButton({ title, onClick }) {
  return (
    <div>
      <button
        style={{
          width: "120px",
          height: "60px",
          margin: "0px 10px",
          color: "royalblue",
          backgroundColor: "white",

          padding: "10px 20px",
          border: "3px solid black",
          borderRadius: "15px",
          cursor: "pointer",
          fontSize: "18px",
        }}
        onMouseEnter={(e) => {
          e.target.border = "3px solid royalblue";
          e.target.style.backgroundColor = "royalblue";
          e.target.style.border = "none";
          e.target.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.color = "black";
          e.target.style.border = "3px solid black";
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}

export default CustomButton;
