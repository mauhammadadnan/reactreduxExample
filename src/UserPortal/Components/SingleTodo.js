import React, { Component } from 'react';
import {connect} from "react-redux";
import MyInput from '../../BasicComponnents/myInput';
import MyButton from '../../BasicComponnents/myButton';  

class SingleTodo extends Component {
  state={
    text:''
  } 
  render() {
    return (  
      <div>
        {this.props.todo.map(el=>
        <div key={el.id} style={{flexDirection:'row',
                                  width:"100%", 
                                  height:200,
                                  background:''}}>
             <MyButton title={'+'} 
                  onClick={()=>this.props.increment(el.id)} />
             <MyButton title={'-'} 
                onClick={()=>this.props.decrement(el.id)} disabled={!el.value} />
             <label>Person{el.value}</label>
             {
                el.editingMode===true ?
                <input 
                    defaultValue={el.inputValue} 
                    onChange={(e)=>this.setState({text: e.target.value})}
                />
                :
                <label>{el.inputValue}</label>
             }
             {
                el.editingMode===true ?
                <MyButton title={'Save'} onClick={()=>this.props.saveText(el.id, this.state.text)} />
                :
                <MyButton title={'Edit'} onClick={()=>this.props.editingText(el.id)} />
              }
             <MyButton title={'Delete'} onClick={()=>{this.props.remove(el.id)}} />
         </div>
         )}
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return {
    todo:state.main
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    remove:(id)=>{
      dispatch ({type:'REMOVE_INPUT',id:id})
    },
    increment:(id)=>{
      dispatch({type:'INCREMENT',id:id})
    },
    decrement:(id)=>{
      dispatch({type:'DECREMENT',id:id})
    },
    editingText:(id)=>{
      dispatch({type:'EDITING',id:id})
    },
    saveText:(id,inputValue)=>{
      dispatch({type:'SAVE_TEXT', id:id, inputValue:inputValue})
    },
  }
} 
export default connect(mapStateToProps,mapDispatchToProps)(SingleTodo);