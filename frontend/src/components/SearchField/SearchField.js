import React from 'react'
import './SearchField.css'

function SearchField() {
    return (
        <div className="searchField">
            <div className="cover"></div>
            <div className="filterField">

                <div className="filterTitle">
                    <span>Filter your search:</span>
                    <button>Search</button>
                </div>
                <div className="filterInputs">
                    <input type="text" 
                        placeholder="Key words ..."
                        className="keyWords"/>
                    <input type="text" 
                        placeholder="Location"
                        className="location"/>
                    <input type="text" 
                        placeholder="Price"
                        className="price"/>
                </div>
                
            </div>
        </div>
    )

}

export default SearchField
