import './App.css';
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import { Track } from '../Track/Track';
import { TrackList } from '../TrackList/TrackList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{
        name: 'Time Lapse', artist: 'Taeyeon', album: 'My Voice', id: 1
      }, {
        name: 'All I Ask', artist: 'Adele', album: '25', id: 2
      }, {
        name: 'Via Chicago', artist: 'Wilco', album: 'Summerteeth', id: 3
      }],
      playlistName: 'the coolest playlist',
      playlistTracks: [{
        name: 'playlistname1', artist: 'playlistartist1', album: 'playlistalbum1', id: 4
      }, {
        name: 'playlistname2', artist: 'playlistartist2', album: 'playlistalbum2', id: 5
      }, {
        name: 'playlistname3', artist: 'playlistartist3', album: 'playlistalbum3', id: 6
      }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    console.log(track);
    let tracks = this.state.playlistTracks;

    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                          onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
