import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid'

class App extends Component {
  state = {
    items: [],
    isLoading: true
  }
  componentDidMount () {
      axios.get('https://www.breakingbadapi.com/api/characters')
      .then(res => {
        this.setState({items: res.data, isLoading: false})
      })
  }
  render() {
    console.log(this.state.items);
    return (<div className="container">
      <Header />
      <CharacterGrid items={this.state.items} isLoading={this.state.isLoading} />
    </div>);
  }
}

export default App;
