//single selection accordian
//multiple selection

import {useState} from "react"; 
import data from "./data";
import './styles.css';

export default function Accordian(){ //This let's us reuse this component

    const [selected, setSelected] = useState(null); //Set the state of selected to null so this means the tabs will be closed
    const [enableMultiSelection, setEnableMultiSelection] = useState(false); //Set multiselection to false so that we can only single select
    const [multiple, setMultiple] = useState([]); //When multi selection is on, we will add the values to an array so that they stay

    // Our function for single clicks that passes in an id and if the id is already selected, set it to null, otherwise, pass in the id
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    //Function for multiple selection that passes in the current id
    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple]; //This is the spread operator which will concat cpyMultiple to the array in multiple
        const findIndexOfCurrentId= cpyMultiple.indexOf(getCurrentId); 
        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId) //when multiple mode is on, it will return value of -1, which means its closed, so you will append it to the array, else splice it
        else cpyMultiple.splice(findIndexOfCurrentId,1) //if it wasn't clicked then it will get removed from array
        setMultiple(cpyMultiple) // this will display everything appended to setMultiple the array
    }
    
    console.log(selected);

    return (
    <div className="wrapper">
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}> Enable Multi Selection </button> {/*changes from true to false*/}
        <div className="accordian">
            {
                data && data.length > 0 ? (
                data.map((dataItem) => (
                <div className="item">
                    <div onClick={ 
                        enableMultiSelection 
                        ? ()=> handleMultiSelection(dataItem.id) 
                        : ()=> handleSingleSelection(dataItem.id)
                    } 
                        className="title">
                        <h3> {dataItem.question}</h3>
                        <span>+</span>
                    </div> 
                    {/*enableMultiSelection
                        ? multiple.indexOf(dataItem.id) !== -1 && (
                            <div className="content">{dataItem.answer}</div>
                        )
                        : selected=== dataItem.id && (
                            <div className="content">{dataItem.answer}</div>
                        )*/}
                    { /*If either selected is the item id, or index of item id in multiple isnt -1, expand*/
                        selected === dataItem.id || 
                        multiple.indexOf(dataItem.id) !== -1 ? //this is to close it because if it isnt -1 then its open, so we set it to null
                        <div className="content">{dataItem.answer}</div>
                        :null
                    }
                </div>
                ))
              )  :  (
                <div> No data found. </div>
            )}
        </div>
    </div>
)}