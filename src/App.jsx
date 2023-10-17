import { useState } from "react";
import generatePassword from "./repository/generatePassword";
import Card from "./components/card";
function App() {
  const [password, setPassword] = useState("Generate Password");
  const [includeNum, setIncludeNum] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const [currentLength, setCurrentLength] = useState(6);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Card
        includeNums={includeNum}
        includeChars={includeChar}
        currentLength={currentLength}
        onChangeLength={(e) => {
          setCurrentLength(e.target.value);
          let generatedPwd = generatePassword(
            includeNum,
            includeChar,
            e.target.value
          );

          setPassword(generatedPwd);
        }}
        password={password}
        onCheckNum={() => {
          setIncludeNum(!includeNum);
          console.log(includeNum);
          includeChar;
        }}
        onCheckChars={() => {
          setIncludeChar(!includeChar);
        }}
        onBtnClick={() => {
          navigator.clipboard.writeText(password);
        }}
      />
    </div>
  );
}

export default App;
