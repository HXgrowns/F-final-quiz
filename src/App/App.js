import React, { Component } from 'react';
import './App.scss';
import '../style/resetting.scss'
import "../style/reboot.scss";
import Group from './component/Group';
import TraineeNotGroup from './component/traineenotgroup/TraineeNotGroup'
class App extends Component {
  state = {
    trainers: [],
    trainees: []
  }

  // TODO feedback：建议把数据请求提取到单独的service
  componentDidMount() {
    fetch("http://localhost:8080/trainers?grouped=false", {
      method: 'GET',
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(response.status + response.statusText));
    }).then((data) => {
      this.setState({
        trainers: data,
      });
      console.log([field]);
    }).catch((err) => {
      console.error(err);
    });

    fetch("http://localhost:8080/trainees?grouped=false", {
      method: 'GET',
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(response.status + response.statusText));
    }).then((data) => {
      this.setState({
        trainees: data,
      });
      // TODO feedback：不建议提交console.log
      console.log([field]);
    }).catch((err) => {
      console.error(err);
    });
  }

  // TODO feedback：组件划分不够合理，划分层次不够
  render() {
    return (
      <div data-testid="app" className="App">
        {/* <Group /> */}

        <nav className="nav">
          <h2>分组列表</h2>
          <button>分组学员</button>
        </nav>
        <main className="student-list">
          <h3>讲师列表</h3>
          <section>
            {this.state.trainers.map((data, index) =>
              <input key={index} type="text" value={data.id + '.' + data.name} />
            )}
            <input className="add-student" type="text" placeholder="+添加讲师" />
          </section>
          <TraineeNotGroup trainees = {this.state.trainees}></TraineeNotGroup>
        </main>
      </div>
    );
  }
}

export default App;
