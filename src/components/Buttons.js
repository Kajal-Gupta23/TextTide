import React from 'react'

function Buttons(props) {
    const buttonClick =(color)=>{
        document.body.style.backgroundColor = color;        
    }

  return (
    <div >
        <button type="button" className="btn btn-primary " onClick={() => buttonClick('#ADD8E6')}>light blue</button>
        <button type="button" className="btn btn-primary " onClick={() => buttonClick('#90EE90')}>light green</button>
        <button type="button" className="btn btn-primary " onClick={() => buttonClick('#ff5162')}>light red</button>
        <button type="button" className="btn btn-primary " onClick={() => buttonClick('#FFC0CB')}>light pink</button>
      
    </div>
  )
}

export default Buttons
