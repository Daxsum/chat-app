import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './join.css'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const handleNameChange = (event) => setName(event.target.value)
    const handleRoomChange = (event) => setRoom(event.target.value)

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <form method="get" action="javascript: void(0);" id="login-form" class="login-form" autocomplete="off" role="main">
  <h1 class="a11y-hidden">Welcome to chat app</h1>
  <div>
    <label class="label-email">
      <input type="text" class="text" name="email" placeholder={name} tabindex="1" onChange={handleNameChange} required />
      <span class="required">Name</span>
    </label>
  </div>
  <input type="checkbox" name="show-password" class="show-password a11y-hidden" id="show-password" tabindex="3" />
  <label class="label-show-password" for="show-password">
    <span>Show Password</span>
  </label>
  <div>
    <label class="label-password">
      <input type="text" class="text"  name="password" placeholder={room} onChange={handleRoomChange} tabindex="2" required />
      <span class="required">Room</span>
    </label>
  </div>
  <div type="submit">


  <Link onClick={
                    event => (!name || !room) ? event.preventDefault() : null
                }
                    to={`chat?name=${name}&room=${room}`} >
                    <button className='button' >
                        Join
                </button>
                </Link>
  </div>

  <div class="email">
  </div>
  <figure aria-hidden="true">
    <div class="person-body"></div>
    <div class="neck skin"></div>
    <div class="head skin">
      <div class="eyes"></div>
      <div class="mouth"></div>
    </div>
    <div class="hair"></div>
    <div class="ears"></div>
    <div class="shirt-1"></div>
    <div class="shirt-2"></div>
  </figure>
</form>
              

            </div>
        </div>

    )
}
export default Join
