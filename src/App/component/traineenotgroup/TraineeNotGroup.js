import React, { Component } from 'react';
import './TraineeNotGroup.scss';
import "antd/dist/antd.css"

import { Popover } from "antd";

// TODO feedback：组件命名不准确
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
                          {/* TODO feedback：可以使用ES6 字符串拼接方式 */}
                          {/* TODO feedback：不建议使用input实现 */}
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
