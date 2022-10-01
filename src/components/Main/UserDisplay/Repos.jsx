import React, { useState, useEffect } from 'react'

const Repos = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [repos, setRepos] = useState([]);



    useEffect(() => {
        fetch(`https://api.github.com/users/${props.user}/repos`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setRepos(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [])



    const mapOfRepos = repos.map((repos, index) => {
        return (
            <li key={repos.id} className="oneRepo">{repos.name}</li>
        )
    })


    return (
        <div className='Repos'>
            <ul>
                {mapOfRepos}
            </ul>
        </div>
    )
}

export default Repos
