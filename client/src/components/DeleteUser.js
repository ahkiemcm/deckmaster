import React, { Component } from 'react';
import axios from 'axios'

class DeleteUser extends Component {


    handleClick = () => {
        axios.delete(`/user/${this.props.match.params.userId}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
                this.props.history.push('/user')
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    DELETE THIS USER
                </button>
            </div>
        );
    }
}

export default DeleteUser;