import React from 'react'

const Taskwrap = () => {
  return (
    <div id="Tasks-wrap">
    <div className="single-Task flex between">
      <div className="flex">
        <form className="checked">
          <input type="checkbox" className="state" />
        </form>
        <p>task</p>
      </div>
      <button className="delete">
        <img src="./images/icon-cross.svg" alt="icon-cross" />
      </button>
    </div>
  </div>

  )
}

export default Taskwrap