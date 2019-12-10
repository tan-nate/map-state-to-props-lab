import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
        <p>{this.props.users.length} users</p>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
