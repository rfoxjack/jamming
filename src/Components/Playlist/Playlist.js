import './Playlist.css';
import React from 'react';
import { TrackList } from './TrackList.js';

export class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input value="New Playlist"/>
                {/* Add a tracklist component */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}