import React from 'react'
import SearchField from '../SearchField/SearchField'

function SearchPage() {
    return (
        <div style={{width: '100%'}}>
            <SearchField />
            <div className="divider"><hr/></div>
            <div className="results">
            <div className="resultHeader">
                <span>120 results found</span>
                <span>Sort</span>
            </div>
            <div className="resultContent">
                <div className="craftsManCard"></div>
                <div className="craftsManCard"></div>
                <div className="craftsManCard"></div>
                <div className="craftsManCard"></div>
            </div>
            </div>
        </div>
    )
}

export default SearchPage
