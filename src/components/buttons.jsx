import React from "react";

function CustomButton({ title, onBtnClicked, isCopiedClicked }) {
  console.log("isCopieddown", isCopiedClicked);
  return (
    <div>
      <button
        onClick={() => {
          onBtnClicked();
        }}
        style={{
          width: "120px",
          height: "60px",
          margin: "0px 10px",
          color: isCopiedClicked ? "white" : "royalblue",
          backgroundColor: isCopiedClicked ? "royalblue" : "white",
          padding: "10px 20px",
          border: "3px solid royalblue",
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
          e.target.style.backgroundColor = isCopiedClicked
            ? "royalblue"
            : "white";
          e.target.style.color = isCopiedClicked ? "white" : "black";
          e.target.style.border = "3px solid royalblue";
        }}
      >
        {title}
      </button>
    </div>
  );
}

export default CustomButton;
