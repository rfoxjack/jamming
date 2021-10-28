import './SearchBar.css';
import React from 'react';

import { Component } from 'react';

export class SearchBar extends Component.React {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter a song, album, or artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}