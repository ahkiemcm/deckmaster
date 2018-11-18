import React, { Component } from 'react';

class UserCreate extends Component {
    render() {
        return (
            <div>
                <h2>UserCreate:
                </h2>
                <form action="create" method="post">
                    Username:
                    <input type="text" name="username" id="" />
                    <br />
                    Password:
                    <input type="text" name="password" id="" />
                    <br />
                    Email:
                    <input type="text" name="email" id="" />
                    <br />
                    Sign up for email notifications about updates and offers?:
                    <input type="checkbox" name="newsletter" id="" />
                    <br />
                    <button type="submit">Create User</button>
                </form>
            </div>
        );
    }
}

export default UserCreate;