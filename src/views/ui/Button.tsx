import React from "react";
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

const Button = ({ children, type = "submit" }: ButtonProps) => {
    return (
        <button className="btn" type={type}>
            {children}
        </button>
    );
};

export default Button;
