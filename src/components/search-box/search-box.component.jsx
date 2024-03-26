import "./search-box.style.css";

const SearchBox = ({ onChangeHandler, placeholder }) => (
    <input 
        className="search-box" 
        type="search" 
        onChange={onChangeHandler} 
        placeholder={placeholder}
    />
);

export default SearchBox;