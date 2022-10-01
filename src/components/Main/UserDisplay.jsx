import React, { useState, useEffect } from 'react'
import Repos from './UserDisplay/Repos'
import Button from 'react-bootstrap/Button';

const UserDisplay = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);



    useEffect(() => {
        fetch(`https://api.github.com/users/${props.user}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [])


    return (
        <div className='UserDisplay'>
            <div className="nameAndIcon">
                <div className='UserLogo'> <img src={items.avatar_url} alt="" height={100} width={100} /> </div>
                <div className="UserName">{items.name}</div>
            </div>
            <div className="bio"><b>BIO:</b> {items.bio}</div>
            <div className="location"><b>Location:</b> {items.location}</div>
            <div className="repositories">
                <h3>Repositories:</h3>
                <Repos repos={items.repos} user={props.user} />
            </div>
            <Button className='back' onClick={props.goToUser}>Go back</Button>
        </div>
    )
}

export default UserDisplay
