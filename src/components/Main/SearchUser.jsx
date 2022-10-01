import React from 'react';
import Button from 'react-bootstrap/Button';

class SearchUser extends React.Component {

    render() {
        return (

            <form onSubmit={this.props.handleSubmit} className='SearchUserForm' >
                <label htmlFor="userNameInput">Github username:</label>
                <input type="text" id='userNameInput' placeholder='e.g. facebook' onChange={this.props.getUser} />
                <Button id='seeUserButton' onClick={this.props.goToUser} >GO!</Button>
            </form>
        )
    }

}

export default SearchUser
