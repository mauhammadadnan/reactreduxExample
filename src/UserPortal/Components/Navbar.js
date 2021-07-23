import React, { Component } from 'react';
import {connect} from 'react-redux';
// import MyInput from '../../BasicComponnents/myInput';
// import MyButton from '../../BasicComponnents/myButton';

class NavBar extends Component {
  render() { 
    return (  
      <div>
        <label>Enter Task</label>
        <input 
            type="text" 
            onChange={(e)=>{this.props.handleChange(e.target)}}
        />
        <button onClick={()=>{this.props.add(this.props.input)}}>Add</button>
        <button onClick={()=>this.props.reset()}>Reset</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    input:state.input
  }
}
const mapDispatchToProps=(dispatch)=>{
return {
  handleChange:(target)=>{
    dispatch ({type:'SET_INPUT',value:target.value})
  },
    add:(input)=>{
      let obj={}
      let id=Math.floor(Math.random()*1000)
      let inputValue=input
      let value=0
      let editingMode=false
      obj={id, inputValue,  value, editingMode}
      dispatch ({type:'ADD_INPUT',value:obj})
    },
    reset:()=>{
      dispatch({type:'RESET'})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);