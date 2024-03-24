import { Component } from "react";

class SearchBox extends Component {
    render() {
        const { onChangeHandler } = this.props;
        return <div className="search-bxo">
            <input type="search" onChange={ onChangeHandler } placeholder='search users' />
        </div>
    }
}

export default SearchBox;