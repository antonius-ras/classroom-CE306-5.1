interface ButtonProps {
    label?: string;
    onClick: () => void;
    theme?: "primary" | 'secondary';
}

const Button = ({
    label = "คลิ๊ก",
    onClick,
    theme = "primary",
}: ButtonProps) => {
    const style = theme === 'primary' ? {backgroundColor: 'blue' , color: 'white' } : { background: 'gray' };
    return <button onClick={onClick} style={style}>{label}</button>;
};
export default Button;