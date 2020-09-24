import React, { Component } from 'react';
import './Group.scss';
class Group extends Component {
    state = {
        teamToStudents: {},
    }
    // componentDidMount() {
    //     fetch("http://localhost:8080/v1/trainees?grouped=false", {
    //         method: 'GET',
    //     }).then((response) => {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //         return Promise.reject(new Error(response.status + response.statusText));
    //     }).then((data) => {
    //         this.setState({
    //             teamToStudents: data,
    //         });

    //     }).catch((err) => {
    //         console.error(err);
    //     });
    // }

    render() {
        let team2stus = this.state.teamToStudents;
        return (
            <div className = 'group'>
                这里是分组后的界面
            </div>
        );
    }
}

export default Group;
