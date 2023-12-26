import "../styles.scss";

export default function Search({className, type, placeholder, onClick }) {
  return (
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        onClick={onClick} 
      />
  );
}

