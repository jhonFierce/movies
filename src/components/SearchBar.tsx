import React, { Component } from 'react'
import './SearchBarStyles.css';
export default class SearchBar extends Component {
    state = {
        searchByOption : 'title'
      }

      

    updateSearch = () => {
        switch (this.state.searchByOption) {
            case 'title':
                console.log("Searching by title...");
                break;
            case 'genre':
                console.log("Searching by genre...");
                break;
        }
    }

    render() {
        let {searchByOption} = this.state
        return (
            <div id="searchBar">
                <h1>Movies</h1>
                    <fieldset>
                    <span>Search by:</span>
                    <input type="radio" id="title" name="searchBy" value="title" onChange={ e => this.setState({'searchByOption':e.target.value})} defaultChecked={searchByOption==='title'} />
                    <label htmlFor="title">Title</label>
                    <input type="radio" id="genre" name="searchBy" value="genre" onChange={ e => this.setState({'searchByOption':e.target.value})} defaultChecked={searchByOption==='genre'} />
                    <label htmlFor="genre">Genre</label>
                    <input type="text" placeholder={'Enter ' + this.state.searchByOption}/>
                    </fieldset>
                <p id="rangeFields">
                    <label htmlFor="byRange">By Date Range:</label>
                    <input type="checkbox" id="byRange" name="byRange" />
                    <input type="date" id="date" />
                    <span>to</span>
                    <input type="date" id="date" />
                    <button onClick={ this.updateSearch }>Update Search</button>
                </p>
            </div>
        )
    }
}
