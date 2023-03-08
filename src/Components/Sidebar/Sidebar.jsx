import React, { useState } from 'react'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import './Sidebar.css'

function Sidebar(props) {
  const colors= ["#fe9b72","#fec971","#00d4fe","#b693fd","#e4ee91"]

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className='sidebar'>
      <div onClick={() => setListOpen(!listOpen)} className="sidebar_add">
        <BsFillPlusCircleFill/>
      </div>
      <ul className={`sidebar_list ${listOpen ? "sidebar_list-active":""}`}>
        {colors.map((item, index)=>(
          <li
            key={index}
            style={{backgroundColor: item}}
            className="side_dot"
            onClick={()=>props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar