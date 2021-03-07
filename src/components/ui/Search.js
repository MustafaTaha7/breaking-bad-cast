import React, { Component } from 'react';
class Search extends Component {
    state = { 
        text: '',
     }
     onChange = (text)=>{
        this.setState({text});
        this.props.getQuery(text);
      }
    render() { 
        return ( 
            <section className="search">
                <form>
                    <input type="text"
                    className="form-control"
                    placeholder='Search characters'
                    value={this.state.text}
                    onChange={(e)=>this.onChange(e.target.value)}
                    autoFocus />
                </form>
            </section>
         );
    }
}
export default Search;