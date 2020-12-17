import React from 'react'
import SearchField from '../SearchField/SearchField'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function SearchPage() {

    const history = useHistory()

    try {
        axios.get('api/search').then(res => {
            if (!res.data) {    
                history.push('/login')
            }
        })
    }
    catch(err) {
        console.log(err.response);
    }


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
