import React, { Component } from 'react';
import axios from 'axios'

class DeleteUser extends Component {


    byeByeUser = () => {
        axios.delete(`/user/${this.props.user._id}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
    }

    render() {
        return (
            <div>
                <button onClick={byeByeUser}>
                    DELETE THIS USER
                </button>
            </div>
        );
    }
}

export default DeleteUser;