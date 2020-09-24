import React, { Component } from 'react';
import './TraineeNotGroup.scss';
import "antd/dist/antd.css"

import { Popover } from "antd";

class TraineeNotGroup extends Component {

    render() {
        const {name, email, office, zoomId, github, id} = this.props;
        console.log(name);
        const content = (
            <ul className = "popover-list">
              <li>{name}</li>
              <li>{email}</li>
              <li>{office}</li>
              <li>{zoomId}</li>
              <li>{github}</li>
              <li>{id}</li>
            </ul>
          );
        return (
            <div className='student-list'>
                <h3>学员列表</h3>
                <section>
                    {this.props.trainees.map((trainee, index) =>
                        <Popover content={content} title="title">
                            <input key={index} type="text" value={trainee.id + '.' + trainee.name} />
                        </Popover>
                    )}
                    <input className="add-student" type="text" placeholder="+添加学员" />
                </section>
            </div>
        );
    }
}

export default TraineeNotGroup;
