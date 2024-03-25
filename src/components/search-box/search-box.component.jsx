import { Component } from "react";
import "./search-box.style.css";

class SearchBox extends Component {
    render() {
        const { onChangeHandler } = this.props;
        return <div className="search-box">
            <input type="search" onChange={ onChangeHandler } placeholder='search users' />
        </div>
    }
}

export default SearchBox;