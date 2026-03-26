interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input: React.FC<InputProps> = ({label, ...props}) => {
    return (
        <div className="flex flex-col gap-1">
            <label>{label}</label>
            <input className="border border-black text-black rounded-xl px-4 py-2" {...props} />
        </div>
    )
}