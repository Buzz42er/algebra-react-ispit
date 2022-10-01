import { useState } from 'react'
import SearchUser from './Main/SearchUser'
import UserDisplay from './Main/UserDisplay'



const Main = () => {

    const [showRepos, setShowRepos] = useState(false)
    const [user, setUser] = useState('')

    const goToUserDisplay = () => {
        setShowRepos(prevShowRepos => !showRepos)

    }

    const getUser = (event) => {

        setUser(event.target.value)
    }


    return (
        <div>

            {showRepos ?
                <UserDisplay showRepos={showRepos} onChange={getUser} user={user} goToUser={goToUserDisplay} />
                :
                <SearchUser showRepos={showRepos} goToUser={goToUserDisplay} getUser={getUser} />}
        </div>
    )
}

export default Main


