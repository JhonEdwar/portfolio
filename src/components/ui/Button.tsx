import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  size?: 'S' | 'M' | 'L';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Button = ({ 
  variant = 'filled', 
  size = 'M', 
  startIcon, 
  endIcon, 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50';
  
  const variantStyles = {
    filled: 'bg-[#fff] text-zinc-900 hover:bg-[#DCDCDC] hover:cursor-pointer',
    outlined: 'border-2 border-[#CDEA68] text-[#CDEA68] hover:bg-[#CDEA68] hover:text-zinc-900'
  };

    const sizeStyles = {
    S: 'px-3 py-1.5 text-sm',
    M: 'px-4 py-2 text-base',
    L: 'px-6 py-3 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {startIcon && <span className={`${size === 'S' ? 'w-4 h-4' : size === 'L' ? 'w-6 h-6' : 'w-5 h-5'}`}>{startIcon}</span>}
      {children}
      {endIcon && <span className={`${size === 'S' ? 'w-4 h-4' : size === 'L' ? 'w-6 h-6' : 'w-5 h-5'}`}>{endIcon}</span>}
    </button>
  );
};

export default Button;