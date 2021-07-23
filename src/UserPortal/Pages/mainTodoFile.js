import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from '../Components/Navbar';
import SingleTodo from '../Components/SingleTodo';
import MyInput from '../../BasicComponnents/myInput';
import MyButton from '../../BasicComponnents/myButton';

class MainTodoFile extends Component {
    state={}
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-light bg-light">   
                        Enter Task
                        <MyInput 
                            type="text" 
                            onChangeText={(e)=>{this.props.handleChange(e.target)}}
                        />
                        <MyButton 
                            title={'Add'} 
                            onClick={()=>{this.props.add(this.props.input)}} />
                        <MyButton 
                            title={'Reset'} 
                            onClick={()=>this.props.reset()} />
                </nav>
                <SingleTodo />
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
        // console.log(input);
        let value=0
        let editingMode=false
        obj={id, inputValue,  value, editingMode}
        // console.log(obj)
        dispatch ({type:'ADD_INPUT',value:obj})
        
      },
      reset:()=>{
        dispatch({type:'RESET'})
      }
    }
  }  
export default connect(mapStateToProps,mapDispatchToProps)(MainTodoFile);