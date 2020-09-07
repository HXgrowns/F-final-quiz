import React, { Component } from 'react';
import './App.scss';
import '../style/resetting.scss'
import "../style/reboot.scss";
class App extends Component {

  render() {
    return (
      <main data-testid="app" className="App">
        <nav className="nav">
          <h2>分组列表</h2>
          <button>分组学员</button>
        </nav>
        <section className="student-list">
          name
        </section>
      </main>
    );
  }
}

export default App;
