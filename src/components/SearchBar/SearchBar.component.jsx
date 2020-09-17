import React , { Component } from 'react'
import axios from 'axios'
import "./SearchBar.styles.css"

import ItemCollection from '../Item-collection/ItemCollection.component'
import DropDown from '../drop-down-menu/drop-down-menu.component'
import ToggleSwitch from '../toggle-switch/toggle-switch.component'

class Search extends Component {
    token = null;
    state = {
        query: "",
        endpoint: '',
        cards: [],
        cardCollection: [],
        header: '',
        options: [ {
            header: 'Search Archetypes',
            url: 'archetype',
            option: 'archetypes'
        },
        {
            header: 'Search Cards',
            url: '&fname'
        },
        {
            header: 'Search types',
            url: 'type'
        },
        {
            header: 'Search a set',
            url: 'cardsets'
        }]
    };

    onChange = e => {
        const { value } = e.target;
        this.setState({
            query: value
        });

         this.search(value)
        
    };

    onClick = (obj) => {
        console.log(obj)
        this.setState({
            header: obj['header'],
            endpoint: obj['url']
        })

    }

    addButton = (obj) => {
        console.log(...this.state.cardCollection)
        console.log(obj)
        

        this.setState({
            cardCollection: [...this.state.cardCollection, obj]
        })
        
        console.log(this.state.cardCollection)
    }

    search = query => {

        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?${this.state.endpoint}=${query}`;
        const token = {};
        this.token = token;

        if ( this.state.query === "" ) {
            this.setState({
                cards: []
            })
        }

        if ( this.state.query !== ""  && this.state.endpoint !== '') {
            
            axios.get(url).then( data => {
                if (this.token === token ) {
                    this.setState({ cards: data.data.data });
                }
            }).catch( err => console.log(err))
        }

        
    };

    componentDidMount() {
        this.search("...")
    }

    render() {
        return(
            <div style={{ display: 'flex', justifyContent: 'center'}}>
            <form>
                <input type="text" className="search-box" placeholder={this.state.header} onChange={this.onChange}/>
            </form>
            <div className="option-menu" style={{ marginTop: "25px"}}>
            <span>Select a Category</span>
                <ul className="option-content">
                {this.state.options.map( option => (
            
                
                    
                    <li className="option" key={option.url} onClick={ e => this.onClick(option)}>{option.header.toUpperCase()}</li>
                ))}
                </ul> 
            </div>
            </div>
        )
    }

}

export default Search