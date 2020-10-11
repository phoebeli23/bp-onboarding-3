import React from "react";
import "./button.css";

// HINT: Use this in ButtonProps to determine how the button is styled
export enum ButtonType {
  green = "button-green",
  white = "button-white",
  clear = "button-clear",
  clearAlt = "button-clearAlt",
}

// HINT: Use this in ButtonProps to determine how the button text is styled
export enum ButtonTextType {
  white = "button-text-white",
  green = "button-text-green",
  grey = "button-text-grey",
}

interface ButtonProps {
  text: string
  buttonType: ButtonType
  textType: ButtonTextType
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ( props: ButtonProps ) => {
  return (
    <button onClick={props.onPress} className={'App-button'} id={props.buttonType}>
      <p className={'App-button-text'} id={props.textType}>
        {props.text}
      </p>
    </button>
  );
};

export default Button;
