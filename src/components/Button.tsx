import React, { ButtonHTMLAttributes, FC, useEffect, useRef } from 'react';
import classNames from 'classnames';
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

const Button: FC<ButtonProps> = ({
  loading = false,
  iconLeft,
  iconRight,
  variant = 'primary',
  size = 'medium',
  tooltip,
  debounceTime = 300,
  children,
  ...props
}) => {
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      if (props.onClick) props.onClick(event);
    }, debounceTime);
  };

  return (
    <button
      {...props}
      className={classNames('btn', `btn-${variant}`, `btn-${size}`, { loading })}
      onClick={handleClick}
      title={tooltip}
    >
      {loading && <span className="spinner"></span>}
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      {children}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
};

export default Button;
