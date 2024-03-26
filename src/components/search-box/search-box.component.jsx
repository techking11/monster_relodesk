import "./search-box.style.css";

const SearchBox = ({ onChangeHandler }) => (
    <div className="search-box">
        <input type="search" onChange={onChangeHandler} placeholder='search users' />
    </div>
);

export default SearchBox;