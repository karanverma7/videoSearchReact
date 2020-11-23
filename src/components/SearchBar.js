import React, { useState } from 'react'
import './SearchBar.css'
import logo from './youtube.png'

const SearchBar = ({ onSubmit }) =>
{
    const [ term, setTerm ] = useState('')

    const onFormSubmit = event => {
        event.preventDefault();
        onSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form form-style" onSubmit={ onFormSubmit }>
                <div className="field">
                    <h2><img src={logo} alt="logo"/> &nbsp;Video Search <span className='logo'><i>via</i> Youtube API</span></h2>
                    <input 
                        type="text"
                        value={ term }
                        onChange={ e => setTerm(e.target.value) }
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;