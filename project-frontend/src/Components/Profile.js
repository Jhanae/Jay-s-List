import React from 'react'
import { useEffect, useState} from 'react';
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

function Profile({profileID}) {

    let history = useHistory();

    const [profiles, setProfiles] = useState([])
    const API = `http://localhost:3000/profiles/${profileID}`
    useEffect(() => {
      async function fetchProducts(){
        const result = await fetch(API);
        const items = await result.json();
        setProfiles(items)
      }
      fetchProducts()
    }, [])
    console.log(profiles)

    function handleClick(){
        history.push('/update-profile')
    }

    return (
        <div className="profilePage">
            <h1>Pro<span style={{'color':'palevioletred'}}>file</span></h1>
            <hr/>
            <img className="profileImage" src={profiles.profile_picture} alt={profiles.name}/>
            <br/>
            <div className="row">
            <h3 style={{'color':'palevioletred'}}>{profiles.username}</h3>
            <hr/>
            <div className="col ">
                <h3 className="profileDetails">Location:</h3>
                <h3 className="profileDetails">About: </h3>
                <h3 className="profileDetails">Gender: </h3>
            </div>
            <div className="col">
                <h5 className="profileDetails"> {profiles.location}</h5>
                <h5 className="profileDetails"> {profiles.bio}</h5>
                <h5 className="profileDetails"> {profiles.gender}</h5>
            </div>
            </div>
            <br/><br/><br/>
            <button onClick={handleClick}className="profile-btn">Edit Profile</button>
        </div>
    )
}

export default Profile
