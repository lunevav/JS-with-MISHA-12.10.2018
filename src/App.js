import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';

// @PURE COMPONENTS
import SearchInput from './Components/SearchInput';
import Screen from './Components/Screen';

class App extends Component {
    constructor() {
      super();

      this.state = {
        data: 'default value'
      }
    }

    getValueFromInput = (e) =>  {
        console.log(e.target.value)
        this.setState({
            data: e.target.value
        })
    }

    getValueFromAnotherOne = (e) =>  {
        console.log(e.target.value)
        this.setState({
            data: e.target.value
        })
    }

    render() {
      console.log(this.props);
      const { data } = this.state;
      console.log('[App Component][Render]')
    return (
     <div>
       <SearchInput
           placeholder="HAHA"
           styles="disabled"
           getValueFromInput={this.getValueFromInput}
       />

     <SearchInput
         placeholder="kek cheburek"
         styles="active"
         getValueFromInput={this.getValueFromAnotherOne}
     />

       <Screen
        data={this.state.data}
       />
     </div>
    );
  }
}

export default App;

