import React from 'react';
import './User.css';

const UserOutput = (props) => {
    return (
    <div className='User'>
        <p>This is paragraprh 1.</p>
        <p>Username: {props.username}</p>
    </div>)
}

export default UserOutput;