import React from "react";
import axios from "axios";

export default class Friendslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(x => this.setState({ friends: x.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        {this.state.friends.map(friend => (
          <div>{friend.name + ", " + friend.age}<br/>{friend.email}<br/></div>
        ))}
        <div><br />
        
        </div>
      </div>
    );
  }
}