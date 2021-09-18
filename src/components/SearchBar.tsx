import React, { Component } from 'react'
import './SearchBarStyles.css';

export default class SearchBar extends Component {
    state = {
        searchByOption : 'title'
      }

      changeSearchBy = (e: any) => {
          this.setState({'searchByOption':e.target.value});      
      }

    render() {
        let {searchByOption} = this.state
        return (
            <div id="searchBar">
                <h1>Movies</h1>
                    <fieldset onChange={this.changeSearchBy}>
                    <span>Search by:</span>
                    <input type="radio" id="title" name="searchBy" value="title" defaultChecked={searchByOption==='title'} />
                    <label htmlFor="title">Title</label>
                    <input type="radio" id="genre" name="searchBy" value="genre" defaultChecked={searchByOption==='genre'} />
                    <label htmlFor="genre">Genre</label>
                    <input type="text" placeholder={'Enter ' + this.state.searchByOption}/>
                    </fieldset>
                <p id="rangeFields">
                    <label htmlFor="byRange">By Date Range:</label>
                    <input type="checkbox" id="byRange" name="byRange" />
                    <input type="date" id="date" />
                    <span>to</span>
                    <input type="date" id="date" />
                    <button>Update Search</button>
                </p>
            </div>
        )
    }
}
