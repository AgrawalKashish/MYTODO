import React from 'react'
import './App.css';

const TODO = (props) => {
    return (
        <>
            <div className='todo_style'>
                <li> {props.text} <button
                className="delete"
                    onClick={() =>
                        props.onSelect(props.id)
                    }> x </button></li></div>
        </>
    )
}

export default TODO;