export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false,
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-md hover:shadow-lg',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  }

  return (
    <button
      className={`
        font-medium rounded-lg transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}