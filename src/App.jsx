import { useCallback, useEffect, useState, useRef } from "react";
import generatePassword from "./repository/generatePassword";
import Card from "./components/card";
function App() {
  const [password, setPassword] = useState("Generate Password");
  const [includeNum, setIncludeNum] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const [currentLength, setCurrentLength] = useState(6);
  const passwordRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const passWordGen = useCallback(() => {
    setIsCopied(false);
    const generatedPassword = generatePassword(
      includeNum,
      includeChar,
      currentLength
    );
    setPassword(generatedPassword);
  }, [includeNum, includeChar, currentLength]);

  useEffect(() => {
    passWordGen();
  }, [includeNum, includeChar, currentLength, passWordGen]);

  const clickButton = useCallback(() => {
    setIsCopied(true);
    passwordRef.current.select;
    window.navigator.clipboard.writeText(password);
  }, [isCopied]);

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
        passwordRef={passwordRef}
        includeNums={includeNum}
        includeChars={includeChar}
        currentLength={currentLength}
        onChangeLength={(e) => {
          setCurrentLength(e.target.value);
        }}
        password={password}
        onCheckNum={() => {
          setIncludeNum(!includeNum);
        }}
        onCheckChars={() => {
          setIncludeChar(!includeChar);
        }}
        onBtnClick={clickButton}
        isCopied={isCopied}
      />
    </div>
  );
}

export default App;
