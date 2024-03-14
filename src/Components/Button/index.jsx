export default function Button({children, variant = 'primary', onClick, disabled}) {
  const variants = {
    primary: "bg-green-600 text-white hover:opacity-85",
    secondary: "bg-transparent text-green-600 border border-green-600  hover:bg-green-600 hover:text-white",
    danger: "bg-transparent text-red-600 border border-red-600  hover:bg-red-600 hover:text-white",
  }
  return (
    <button onClick={onClick} disabled={disabled} className={`p-4 rounded-lg w-full active:scale-[0.98] ${variants[variant]}`}>
      {children}
    </button>
  );
}