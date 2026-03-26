interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({children, variant = 'primary', ...props}) => {
    const variantStyles = {
        primary: 'bg-white text-black hover:bg-gray-200',
        secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    };
    return (
        <button 
            className={`${variantStyles[variant]} px-4 py-2 rounded`} 
            {...props}
        >
            {children}
        </button>
    )
}