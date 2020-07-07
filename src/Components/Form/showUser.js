import React from 'react';


const ShowUser = ({ avatar_url, bio, location, repos_url }) => {

    return (

        < div >
            <img src={avatar_url} alt='user avatar' />
            <p>{bio}</p>
            <p>{location} </p>
            <a href={repos_url}>User repo link</a>
            <p>{repos_url}</p>
        </div >
    );
}

export default ShowUser;