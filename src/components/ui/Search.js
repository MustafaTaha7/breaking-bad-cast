import React, { Component } from 'react';
class Search extends Component {
    state = { 
        text: '',
     }
     onChange = (e)=>{
        this.setState({text: e.target.value})
      }
    render() { 
        console.log(this.props);
        return ( 
            <section className="search">
                <form>
                    <input type="text" 
                    className="form-control" 
                    placeholder='Search characters' 
                    value={this.state.text}
                    onChange={(e)=>this.onChange(e)}
                    autoFocus />
                </form>
            </section>
         );
    }
}
export default Search;