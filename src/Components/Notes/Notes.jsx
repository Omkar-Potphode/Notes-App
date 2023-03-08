import React from 'react'
import './Notes.css'
import {RiDeleteBinFill} from 'react-icons/ri'

export default function Notes(props) {

  let timer=500,timeout
  const formatDate=(value)=>{
    if(!value) return ""

    const date = new Date();
    const months = ['January','Februray','March','April','May','June','July','August','september','october','November','december']

    let hrs = date.getHours();
    let amPm=hrs>12?"PM":"AM";
    hrs=hrs?hrs:"12"
    hrs=hrs>12?hrs=24-hrs:hrs

    let min = date.getMinutes();
    min = min<10?"0"+min:min

    let day = date.getDate();

    const month = months[date.getMonth()]

    return `${hrs}:${min} ${amPm} ${day} ${month}`
  };

  const debonce = (func) =>{
    clearTimeout(timeout)
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) =>{
    debonce(()=>props.updateText(text,id));
  };



return (
    <div className='note' style={{backgroundColor:props.note.color}}>
      <textarea className='note_text' defaultValue={props.note.text} onChange={(event)=> updateText(event.target.value, props.note.id)}/>
      <div className='note_footer'>
        <p>{formatDate(props.note.time)}</p>
        <RiDeleteBinFill className='delete_icon' onClick={() => props.deleteNote(props.note.id)}/>
      </div>
    </div>
  )
}
