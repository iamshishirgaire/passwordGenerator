import React from "react";
import Button from "./buttons";

function Card({
  includeNums,
  includeChars,
  currentLength,
  onChangeLength,
  onCheckNum,
  password,
  onCheckChars,
  onBtnClick,
}) {
  return (
    <>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          height: "fit-content",
          color: "white",
          backgroundColor: "white",
          padding: "15px 25px",
          border: "none",
          borderRadius: "15px",
          fontSize: "12px",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "black",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            Password Generator
          </h1>
          <h3 style={{ textAlign: "center", color: "black", fontSize: "20px" }}>
            Length - {currentLength ?? 6}
          </h3>
        </div>

        <div
          className="firstRow"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1
            className="password"
            style={{
              backgroundColor: "lavender",

              width: "100%",
              borderRadius: "12px",
              padding: "10px 20px",
              color: "dimgrey",
            }}
          >
            {password ?? 0}
          </h1>
          <Button title={"\u{1F4CB} Copy"} onclick={onBtnClick}></Button>
        </div>
        <div
          className="secondRow"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <input
            type="range"
            min="6"
            max="14"
            step="1"
            value={currentLength}
            onChange={onChangeLength}
          />
          <div
            style={{
              marginLeft: "10px",
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <input
              type="checkbox"
              defaultChecked={includeNums}
              value={includeNums}
              onChange={onCheckNum}
              style={{ width: "20px", height: "20px" }}
              name="Numbers"
            />
            <label
              htmlFor="Numbers"
              inc
              style={{ marginLeft: "5px", color: "black", fontSize: "20px" }}
            >
              Numbers
            </label>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <input
              type="checkbox"
              value={includeChars}
              defaultChecked={includeChars}
              onChange={onCheckChars}
              style={{ width: "20px", height: "20px" }}
              name="Letters"
            />
            <label
              htmlFor="Letters"
              style={{ marginLeft: "5px", color: "black", fontSize: "20px" }}
            >
              Symbols
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
