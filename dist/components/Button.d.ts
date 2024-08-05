import React, { ButtonHTMLAttributes, FC } from 'react';
import '../styles/Button.css';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    size?: 'small' | 'medium' | 'large';
    tooltip?: string;
    debounceTime?: number;
}
declare const Button: FC<ButtonProps>;
export default Button;
