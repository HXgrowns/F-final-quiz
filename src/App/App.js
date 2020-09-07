import React, { Component } from 'react';
import './App.scss';
import '../style/resetting.scss'
import "../style/reboot.scss";
class App extends Component {
  datas = [{
    id: 1,
    name: '沈乐起'
  },
  {
    id: 2,
    name: '徐慧慧',
  },
  {
    id: 1,
    name: '沈乐起'
  },
  {
    id: 2,
    name: '徐慧慧',
  },
  {
    id: 1,
    name: '沈乐起'
  },
  {
    id: 2,
    name: '徐慧慧',
  },
  {
    id: 1,
    name: '沈乐起'
  },
  {
    id: 2,
    name: '徐慧慧',
  },
  {
    id: 1,
    name: '沈乐起'
  },
  {
    id: 2,
    name: '徐慧慧',
  },
  {
    id: 1,
    name: '沈乐起'
  },
  {
    id: 2,
    name: '徐慧慧',
  },
  {
    id: 1,
    name: '沈乐起'
  },
  {
    id: 2,
    name: '徐慧慧',
  }
  ]

  render() {
    return (
      <div data-testid="app" className="App">
        <nav className="nav">
          <h2>分组列表</h2>
          <button>分组学员</button>
        </nav>
        <main className="student-list">
          <h3>学员列表</h3>
          <section>
            {this.datas.map((data, index) =>
              <input key={index} type="text" value={data.id + '.' + data.name} disabled />
            )}
            <input className ="add-student" type = "text" placeholder = "+添加学员"/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
