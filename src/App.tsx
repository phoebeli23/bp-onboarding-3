import React from "react";
import "./App.css";
import Button, { ButtonType, ButtonTextType } from "./components/button/Button";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button
          text='LOG IN'
          buttonType={ButtonType.clear}
          textType={ButtonTextType.white}
          onPress={() => console.log("I'm the first button.")}
        />
        <Button
          text='CONTINUE'
          buttonType={ButtonType.green}
          textType={ButtonTextType.white}
          onPress={() => console.log("I'm the second.")}
        />
        <Button
          text='SKIP'
          buttonType={ButtonType.white}
          textType={ButtonTextType.grey}
          onPress={() => console.log("Third.")}
        />
        <Button
          text='ONCE A DAY'
          buttonType={ButtonType.clearAlt}
          textType={ButtonTextType.green}
          onPress={() => console.log("Hello! I'm the last button!")}
        />
      </header>
    </div>
  );
}

export default App;