import React from 'react'
import './textContainer.css'
import onlineIcon from '../../icons/onlineIcon.png'
export const TextContainer = ({ users }) => {
    return (
        <div className="textContainer">
            <div>
                <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
                <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji"></span></h2>
                <h2 className='author'>Made with  <span className='span'> ❤️ </span> by Kalab Tenadeg <span role="img" aria-label="emoji"></span>
                    <a href="https://github.com/Daxsum">github profile </a>
                </h2>
            </div>
            {
                users
                    ? (
                        <div>
                            <h1 className='activeUsers'>People currently chatting:</h1>
                            <div className="activeContainer">
                                <h2>
                                    {users.map(({ name }) => (
                                        <div key={name} className="activeItem">
                                            {name}
                                            <img alt="Online Icon" src={onlineIcon} />
                                        </div>
                                    ))}
                                </h2>
                            </div>
                        </div>
                    )
                    : null
            }
        </div>
    )
}