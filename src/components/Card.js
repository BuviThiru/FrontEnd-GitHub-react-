import React from 'react';
import './card.css'

function Card({avatar_url,login,html_url}) {
  
  return (
    <div className='individual-card'>
        <img src ={avatar_url} alt ="ProfilePic" className='profile-pic'/>
        <div className='login-name'>{login}</div>
        <a href={html_url}><button className='viewprofile-btn'> View Profile</button></a>
    </div>
  )
}

export default Card