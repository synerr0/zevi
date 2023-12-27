import React from "react";
import "../styles.scss";

interface SearchProps {
  className: string,
  type: string,
  placeholder: string,
  onClick?: () => void
}

const Search: React.FC<SearchProps> = ({
  className,
  type,
  placeholder,
  onClick
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onClick={onClick}
    />
  );
};

export default Search;
