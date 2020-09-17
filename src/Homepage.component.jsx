import React, { Component } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./components/Search/SearchBar.styles.css";

import ItemCollection from "./components/Item-collection/ItemCollection.component";
import Search from "./components/Search/Search.component";
import Header from "./components/Header/Header.component";
import DropDown from "./components/drop-down-menu/drop-down-menu.component";
import ToggleSwitch from "./components/toggle-switch/toggle-switch.component";
import CardCollection from "./components/CardCollection/CardCollection.component";

class Homepage extends Component {
  token = null;
  state = {
    query: "",
    endpoint: "",
    cards: [],
    cardCollection: [],
    total: 0,
    header: "",
    options: [
      {
        header: "Search Archetypes",
        url: "archetype",
        option: "archetypes",
      },
      {
        header: "Search Cards",
        url: "&fname",
      },
      {
        header: "Search types",
        url: "type",
      },
      {
        header: "Search a set",
        url: "cardsets",
      },
    ],
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });

    this.search(value);
  };

  onClick = (obj) => {
    this.setState({
      header: obj["header"],
      endpoint: obj["url"],
    });
  };

  addButton = (obj) => {
    this.setState({
      cardCollection: [...this.state.cardCollection, obj],
    });
    let price = obj.card_prices["0"]["tcgplayer_price"];

    this.setState({
      total: (Number(this.state.total) + Number(price)).toFixed(2),
    });
  };

  subtractButton = (obj) => {
    let oldArray = [...this.state.cardCollection];
    let index = this.state.cardCollection.indexOf(obj);

    console.log(oldArray);

    if (index > -1) {
      oldArray.splice(index, 1);
    }

    console.log(oldArray);

    console.log(index);
    let price = obj.card_prices["0"]["tcgplayer_price"];

    this.setState({
      total: (Number(this.state.total) - Number(price)).toFixed(2),
    });

    this.setState({
      cardCollection: oldArray,
    });

    console.log(this.state.cardCollection);
  };

  search = (query) => {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?${this.state.endpoint}=${query}`;
    const token = {};
    this.token = token;

    if (this.state.query === "") {
      this.setState({
        cards: [],
      });
    }

    if (this.state.query !== "" && this.state.endpoint !== "") {
      axios
        .get(url)
        .then((data) => {
          if (this.token === token) {
            this.setState({ cards: data.data.data });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  componentDidMount() {
    this.search("...");
  }

  render() {
    return (
      <div>
        <Header
          header={this.state.header}
          cardCollection={this.state.cardCollection}
          total={this.state.total}
        />
        <Search
          state={this.state}
          onClick={(obj) => this.onClick(obj)}
          onChange={(e) => this.onChange(e)}
        />
        <Tabs>
          <TabList>
            <Tab>Search Results</Tab>
            <Tab>Your Collection ({this.state.cardCollection.length})</Tab>
          </TabList>
          <TabPanel>
            <ItemCollection cards={this.state.cards} onClick={this.addButton} />
          </TabPanel>
          <TabPanel>
            <button
              onClick={() => {
                this.setState({ cardCollection: [] });
                this.setState({ total: 0 });
              }}
            >
              Clear
            </button>
            <div className="flex-row label-container">
              <h2 className="flex-item">Total: ${this.state.total}</h2>
            </div>
            <CardCollection
              cards={this.state.cardCollection}
              onClick={this.subtractButton}
            />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Homepage;
