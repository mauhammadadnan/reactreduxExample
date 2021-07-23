const mainReducer = (state=[], action)=>{
  switch(action.type){
    case 'ADD_INPUT':
      return state=[...state, action.value]  
    case 'REMOVE_INPUT':
      return state.filter(el=>el.id!==action.id);  
    case 'INCREMENT':
      const tempLists=[...state];
      const indexs=tempLists.findIndex((t)=> t.id===action.id);
      if(indexs=>0){
        tempLists[indexs].value++;  
        return tempLists;
      }
      return tempLists;
    case 'DECREMENT':
      const tempList=[...state];
      const index=tempList.findIndex((t)=> t.id===action.id);
      if(index=>0){
        tempList[index].value--;
        return tempList;
      }
      return tempList; 
    case "EDITING":
      let tempLists1 = [...state];
        for(let index=0;  index<tempLists1.length; index++){
          if(tempLists1[index].id===action.id){
            tempLists1[index].editingMode=true;
          }
        }
    
      let newList1 = [...tempLists1];
      return newList1;
    case "SAVE_TEXT":
        let tempLists2 = [...state];
        for(let index=0;  index<tempLists2.length; index++){
          if(tempLists2[index].id===action.id){
            tempLists2[index].editingMode=false;
            tempLists2[index].inputValue=action.inputValue;
          }
        }
        let newList = [...tempLists2];
        return newList;
    case 'RESET':
      let tempLists3=[...state];
      for(let index=0; index<tempLists3.length; index++){
        tempLists3[index].value=0;
      }
      let newList2 = [...tempLists3];
      return newList2;
    default:
      return state;
  }
}
export default mainReducer