import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search';

class App extends Component {
  state = {
    items: [],
    isLoading: true,
    query:'',
  }
  getData = ()=>{
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${this.state.query}`)
    .then(res => {
      this.setState({items: res.data, isLoading: false,})
    })
  }
  componentDidMount(){
    this.getData();
  }
  componentDidUpdate (prevProps, prevState) {
      if(prevState.query !== this.state.query){
        this.getData();
      }
  }
 
  setQuery = (q) => {
    this.setState({query:q})
  }
  render() {
    console.log(this.state.items);
    return (<div className="container">
      <Header />
      <Search getQuery={this.setQuery}/>
      <CharacterGrid items={this.state.items} isLoading={this.state.isLoading} />
    </div>);
  }
}

export default App;
