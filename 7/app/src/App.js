import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Users, a } from './UsersTable'
import Modal from './Modal'

class App extends React.Component {
  state = {
    isLoggedIn: false,
    blockedUsers: [],
    modalVisible: false
  }

  triggerModal = (e, record = null) => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      userData: record
    });
  };

  blockUser = (content) => {
    alert(`Пользователь с ID = ${content.id} заблокирован`)
  }

  render() {
    const {
      blockedUsers = [],
      userData = null,
      modalVisible = false
    } = this.state

    return (
      <div className="App">
        <Modal
          triggerModal={this.triggerModal}
          content={userData}
          visible={modalVisible}
          blockUser={this.blockUser}
        />
        <Users
          triggerModal={this.triggerModal}
          blockedUsers={this.state.blockedUsers} />
      </div>
    );
  }
}

export default App;
