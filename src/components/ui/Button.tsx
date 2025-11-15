import { ReactNode, ButtonHTMLAttributes } from 'react';

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
  const baseStyles = 'flex items-center justify-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 hover:cursor-pointer ';

  const variantStyles = {
    filled: 'bg-[#CDEA68] text-zinc-900 hover:bg-[#E0FF75] ',
    outlined: 'border-2 border-[#CDEA68] text-[#CDEA68] hover:bg-[#CDEA68] hover:text-zinc-900'
  };

    const sizeStyles = {
    S: 'px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm',
    M: 'px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base',
    L: 'px-4 py-2 md:px-6 md:py-3 text-base md:text-lg'
  };

  const iconBase = 'flex items-center justify-center relative top-[1px]';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {startIcon && <span className={`${iconBase} ${size === 'S' ? 'w-3 h-3 md:w-4 md:h-4' : size === 'L' ? 'w-5 h-5 md:w-6 md:h-6' : 'w-4 h-4 md:w-5 md:h-5'}`}>{startIcon}</span>}
      {children}
      {endIcon && <span className={`${iconBase} ${size === 'S' ? 'w-3 h-3 md:w-4 md:h-4' : size === 'L' ? 'w-5 h-5 md:w-6 md:h-6' : 'w-4 h-4 md:w-5 md:h-5'}`}>{endIcon}</span>}
    </button>
  );
};

export default Button;