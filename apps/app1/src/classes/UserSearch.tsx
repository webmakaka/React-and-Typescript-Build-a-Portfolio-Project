import { Component } from 'react';

interface IUser {
  name: string;
  age: number;
}

interface IUserSearchProps {
  users: IUser[];
}

interface IUserSearchState {
  name: string;
  user: IUser | undefined;
}

class UserSearch extends Component<IUserSearchProps> {
  state: IUserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user?.name} - {user?.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
