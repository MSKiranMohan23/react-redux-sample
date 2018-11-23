import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers} from './actions/users.actions';

//import 'raf/polyfill';
require('es6-promise').polyfill();

class App extends Component {
  state = {}
  componentDidMount(){
    var that = this;
    this.props.getAllUsers();     
  }
  
  render() {
    console.log('this.props',this.props);
    let users = typeof this.props.AllUsers == 'object' && this.props.AllUsers ? this.props.AllUsers: null;
    let userList =null;
    if(users != null && users.length){ debugger;
      userList = this.userList(users);
    }

    return (
      <div className="App">
        <div>
           { userList !=null ?  <table><tbody><tr><th>User List</th></tr>{userList}</tbody></table>:"No users !!"}
        </div>
      </div>
    );
  }
  userList(users){ alert("dasdasd");
    debugger;
   
   let user = null;
   user = users.map((value)=>{ //debugger
      return <tr><td>{value.id}</td><td>{value.name}</td><td>{value.username}</td><td>{value.email}</td></tr>;
     
  });
    return user;
  }
}

App.propTypes = {

}
function mapStateToProps(state){
  return {
    AllUsers : state.users
  }
}
function mapDispatchToProps(dispatch){
  return{
    getAllUsers:bindActionCreators(getAllUsers,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
