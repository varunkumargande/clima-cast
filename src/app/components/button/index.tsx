// src/app/components/button/index.tsx
import React, { FC, ReactNode, MouseEvent } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "@/app/types/types";

const Button: FC<ButtonProps<ReactNode, MouseEvent>> = (props) => {
  const { theme, onClick, children } = props;

  return (
    <button
      onClick={onClick}
      className={`py-2 px-3 mr-2 text-black ${
        theme ? styles.neumorphicBtnDark : styles.neumorphicBtnLight
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
